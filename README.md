# Маркус И.Д. — Юрист

Статический сайт-визитка. React + Vite + Tailwind CSS.

## Разработка

```bash
npm install
npm run dev
```

Откроется локальный сервер (адрес будет выведен в консоли).

## Сборка

```bash
npm run build
```

Результат — папка `dist/` со статическими файлами (HTML/CSS/JS).

## Деплой на сервер (idmarkus.ru)

Сайт полностью статический, Node.js на сервере не установлен и не нужен — только nginx.
Сборка происходит локально, на сервер заливаются только готовые файлы из `dist/`.

**Основной домен:** `idmarkus.ru` / `www.idmarkus.ru` — отдают сайт напрямую.
**Домен idmarcus.ru** (старое написание, куплен по ошибке) `/ www.idmarcus.ru` — 301-редирект на `idmarkus.ru`, сохранён ради уже накопленного трафика/SEO.

**Сервер:** VDS на Timeweb, IP `83.222.9.57`
**Папка сайта на сервере:** `/home/albi/static_sites/idmarcus/`
**Конфиг nginx:** `/etc/nginx/sites-available/idmarcus.conf` (SSL от Let's Encrypt через certbot на оба домена, автопродление настроено)

### Порядок обновления сайта (через git, как у asama-design-studio)

Ветка `main` — исходники, ветка `dist` — только собранные файлы (содержимое `dist/`).
На сервере лежит git-чекаут ветки `dist`, обновление — `git pull`.

1. Внести правки в код (см. раздел ниже, где что лежит).
2. Собрать проект:
   ```bash
   npm run build
   ```
3. Запушить `dist/` в ветку `dist` (через отдельный git-worktree, чтобы не смешивать с `main`):
   ```bash
   git worktree add --detach ../law_deploy-dist-wt
   cd ../law_deploy-dist-wt && git checkout dist && git rm -rf . 
   cp -r ../law_deploy/dist/* .
   git add -A && git commit -m "Деплой: <кратко что изменилось>"
   git push origin dist
   cd ../law_deploy && git worktree remove ../law_deploy-dist-wt --force
   ```
4. На сервере (от пользователя `albi`, не root — иначе файлы становятся `root:root`
   и это может сломать права, см. ниже):
   ```bash
   su - albi
   cd /home/albi/static_sites/idmarcus
   git pull
   ```
5. Проверить: `git status` должен быть чистый, `git log -1` — тот же коммит, что и
   https://github.com/Albina-Shipova/law_deploy/commits/dist. Затем открыть
   https://idmarkus.ru — nginx перечитывать не нужно.

Подключение к серверу — по SSH-ключу, пароль не требуется:
```bash
ssh root@83.222.9.57
```
SSH на этом сервере иногда подвисает (1 ГБ RAM, `Connection timed out during banner exchange`
или `Connection closed`) — само отпускает через несколько попыток/минут, это не обрыв ключа
и не бан по IP.

**Известная проблема (было 20.07.2026):** старый способ деплоя — `scp -r dist/* root@...` —
заливал файлы от имени `root`, и один раз это привело к тому, что папка `assets` получила
права `0707` (`drwx---rwx`, у группы `albi` — вообще никаких прав). Nginx работает от `www-data`,
который состоит в группе `albi` — из-за этого при заходе через группу «остальные» права `rwx`
роли не играли, доступ к файлам блокировался, и `try_files ... /index.html` в конфиге откатывался
на `index.html` даже при запросе `.js`/`.css` (отдавал 200, но не тот контент — сайт был белым
экраном без ошибок в сети). Чинится через `chmod 755 /home/albi/static_sites/idmarcus/assets`.
Деплой через `git pull` от `albi` такой проблемы не создаёт (git сам выставляет нормальные права).

### Разовая настройка (уже сделана, для справки)

- DNS: A-записи `idmarcus.ru`, `www.idmarcus.ru`, `idmarkus.ru`, `www.idmarkus.ru` → `83.222.9.57` (в панели Timeweb)
- SSH-ключ добавлен через панель Timeweb → сервер → «Доступ»
- Папка создана: `mkdir -p /home/albi/static_sites/idmarcus`
- nginx-конфиг создан и включён (`sites-available` → симлинк в `sites-enabled`), `nginx -t` + `systemctl reload nginx`
- SSL выпущен отдельными командами (два независимых сертификата, оба автопродлеваются через certbot):
  ```bash
  certbot --nginx -d idmarcus.ru -d www.idmarcus.ru -m volare.al@gmail.com --agree-tos --redirect
  certbot --nginx -d idmarkus.ru -d www.idmarkus.ru -m volare.al@gmail.com --agree-tos --redirect
  ```
- После выпуска сертификата для `idmarkus.ru` блок `idmarcus.ru`/`www.idmarcus.ru` в конфиге вручную
  переведён с раздачи контента на `return 301 https://idmarkus.ru$request_uri;`
- 21.07.2026: деплой переведён со `scp` на `git` (ветка `dist`) — старая папка на сервере
  сохранена как `idmarcus_scp_backup_<дата>` на случай отката.

## Где редактировать контент

- Тексты и разделы страницы — `src/components/sections/*.tsx`
  (Header, Hero, About, Services, Education, Reviews, Contacts, Footer)
- Картинки — `src/assets/`
- Цвета и шрифты — `src/index.css` (переменные темы в `:root`)
- Заголовок, описание для поисковиков — `index.html`

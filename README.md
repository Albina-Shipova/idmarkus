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

## Деплой на сервер (idmarcus.ru)

Сайт полностью статический, Node.js на сервере не установлен и не нужен — только nginx.
Сборка происходит локально, на сервер заливаются только готовые файлы из `dist/`.

**Сервер:** VDS на Timeweb, IP `83.222.9.57`
**Папка сайта на сервере:** `/home/albi/static_sites/idmarcus/`
**Конфиг nginx:** `/etc/nginx/sites-available/idmarcus.conf` (SSL от Let's Encrypt через certbot, автопродление настроено)

### Порядок обновления сайта

1. Внести правки в код (см. раздел ниже, где что лежит).
2. Собрать проект:
   ```bash
   npm run build
   ```
3. Залить содержимое `dist/` на сервер (перезаписывает старые файлы):
   ```bash
   scp -r dist/* root@83.222.9.57:/home/albi/static_sites/idmarcus/
   ```
4. Проверить в браузере: https://idmarcus.ru — обновление применяется сразу,
   nginx ничего перезапускать не нужно.

Подключение к серверу — по SSH-ключу (см. `~/.ssh/id_ed25519` на этом компьютере),
пароль не требуется. Если что-то пошло не так после заливки — можно зайти и проверить руками:
```bash
ssh root@83.222.9.57
```

### Разовая настройка (уже сделана, для справки)

- DNS: A-записи `idmarcus.ru` и `www.idmarcus.ru` → `83.222.9.57` (в панели Timeweb)
- SSH-ключ добавлен через панель Timeweb → сервер → «Доступ»
- Папка создана: `mkdir -p /home/albi/static_sites/idmarcus`
- nginx-конфиг создан и включён (`sites-available` → симлинк в `sites-enabled`), `nginx -t` + `systemctl reload nginx`
- SSL выпущен командой:
  ```bash
  certbot --nginx -d idmarcus.ru -d www.idmarcus.ru -m volare.al@gmail.com --agree-tos --redirect
  ```

## Где редактировать контент

- Тексты и разделы страницы — `src/components/sections/*.tsx`
  (Header, Hero, About, Services, Education, Reviews, Contacts, Footer)
- Картинки — `src/assets/`
- Цвета и шрифты — `src/index.css` (переменные темы в `:root`)
- Заголовок, описание для поисковиков — `index.html`

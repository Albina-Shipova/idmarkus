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

## Деплой

Сайт полностью статический, backend не нужен. Достаточно скопировать содержимое `dist/`
на любой веб-сервер (nginx, Apache, обычный shared-хостинг) как корень сайта.
Клиентского роутинга нет, поэтому никаких особых правил rewrite настраивать не нужно.

Пример минимального конфига nginx:

```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/law-site/dist;
    index index.html;
}
```

## Где редактировать контент

- Тексты и разделы страницы — `src/components/sections/*.tsx`
  (Header, Hero, About, Services, Education, Reviews, Contacts, Footer)
- Картинки — `src/assets/`
- Цвета и шрифты — `src/index.css` (переменные темы в `:root`)
- Заголовок, описание для поисковиков — `index.html`

# Hackathon ITAM Courses

## Стек технологий

### Backend (`backend/`)
- **Язык:** JavaScript (Node.js)
- **Web-фреймворк:** Express
- **Аутентификация:** JWT (jsonwebtoken), интеграция через Telegram
- **Переменные окружения:** dotenv
- **Контейнеризация:** Docker
- **Хранилище пользователей:** In-memory JS (memory.store.js)
- **Оркестрация:** docker-compose

### Frontend (`frontend/`)
- **Язык:** JavaScript (ES6+)
- **Фреймворк:** React v19
- **Сборка:** Vite
- **UI‑библиотека:** MUI (`@mui/material`), emotion
- **HTTP‑клиент:** axios — общение с backend
- **Роутинг:** React Router v7
- **Стилизация:** emotion + CSS Modules
- **Контейнеризация:** Docker

### Инфраструктура
- **Reverse‑proxy:** Nginx
- **Оркестрация:** docker-compose

---

## Архитектура и структура каталогов

### Backend

- `src/`
  - `app.js` — запуск Express
  - `routes.js` — корневой роутер, подключает модули
  - `modules/`
    - `auth/` — авторизация (Telegram, JWT)
    - `users/` — сервисы по работе с пользователями
  - `db/` — локальное хранилище (in-memory)
  - `utils/` — общие утилиты (Telegram auth)

**Аутентификация:** вход через Telegram (bot-token). После успешного входа выдается JWT-токен. Пользователь сохраняется/обновляется в in-memory хранилище.

**REST API:** Основные эндпоинты — `/auth/telegram`, операции с пользователями.

### Frontend

- `src/`
  - `app/`
    - `routes/` — описаны вложенные роуты
    - `main-context/` — глобальный React-контекст состояния
    - `app-wrapper/` — обертки
    - `styles/` — глобальные стили
  - `modules/` — крупные UI-модули (Header, MainMenu, Navigation и др.)
  - `pages/` — основные страницы (Auth, Main, Hack и др.)
  - `shared/` — переиспользуемые компоненты и стили

**Особенности:**
- SPA с вложенными маршрутами (React Router)
- Глобальный стейт через context/provider
- UI: MUI + emotion + CSS-модули
- Авторизация: Telegram, хранение токена (auth.js)

---

## Запуск

- Используйте `docker-compose up` для продакшена или запускайте фронт и бэк отдельно (см. Dockerfile в каждой части).

## Авторы/вкладчики
- ITAM Hackathon team

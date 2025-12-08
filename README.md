## Стек технологий

### Backend (`backend/`)

- **Язык:** Python 3  
- **Фреймворк:** FastAPI — основной web‑фреймворк (REST API)  
- **БД и ORM:** SQLAlchemy — работа с базой данных  
- **Драйвер БД:** asyncpg — асинхронный драйвер PostgreSQL  
- **Аутентификация:** JWT (python-jose)  
- **Сервер:** Uvicorn — ASGI‑сервер для разработки и продакшена  
- **Контейнеризация:** Docker  
- **Дополнительно:** bcrypt, python-dotenv, passlib — безопасность и работа с переменными окружения  

### Frontend (`frontend/`)

- **Язык:** JavaScript (ES6+)  
- **Фреймворк:** React (19.x)  
- **Сборка:** Vite — сборка и dev‑сервер  
- **UI‑библиотека:** MUI (`@mui/material`)  
- **Стилизация:** emotion — стилизация компонентов  
- **HTTP‑клиент:** axios — запросы к backend  
- **Роутинг:** React Router — SPA‑маршрутизация  
- **Контейнеризация:** Docker  

### Инфраструктура и CI

- **Reverse‑proxy и SSL:** Nginx  
- **Оркестрация сервисов:** docker-compose  

---

## Архитектура

### Backend (FastAPI + SQLAlchemy)

Модульная структура проекта:

- `models` — ORM‑модели  
- `repositories` — работа с базой данных, логика доступа к данным  
- `router` — REST‑эндпоинты (авторизация, профиль, хакатон, команды)  
- `schemas` — Pydantic‑схемы (DTO)  
- `utils` — утилиты и тестовые данные  

Дополнительно:

- **Аутентификация:** JWT через Telegram‑username, роли пользователя (`user` / `admin`)  
- **Документация:** OpenAPI генерируется автоматически средствами FastAPI  

### Frontend (React + Vite)

Модульная структура:

- `src/pages` — страницы приложения (Auth, Main, Hack и др.)  
- `src/modules` — крупные модули (Header, MainMenu и другие)  
- `src/shared` — переиспользуемые компоненты, стили и утилиты  

Особенности:

- **Состояние:** глобальный контекст (`main-context`) для хранения состояния  
- **Роутинг:** React Router, вложенные маршруты (см. `src/app/routes/router.jsx`)  
- **Стилизация:** CSS‑модули + MUI/emotion  

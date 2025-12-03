FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci || npm i

COPY . .

# Получаем параметры сборки из docker build args
ARG VITE_API_BASE=/api
ARG VITE_TG_BOT_USERNAME

# Передаём переменные окружения только на время сборки, чтобы Vite их подхватил
RUN VITE_API_BASE=$VITE_API_BASE \
    VITE_TG_BOT_USERNAME=$VITE_TG_BOT_USERNAME \
    npm run build

FROM nginx:1.27-alpine AS prod

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

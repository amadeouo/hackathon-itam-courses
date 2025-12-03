FROM node:20-alpine AS base

WORKDIR /app

# Install only production deps
COPY package.json package-lock.json* ./
RUN npm install --production --silent || npm install --production

# Copy source
COPY src ./src

ENV NODE_ENV=production
EXPOSE 8080

CMD ["node", "src/app.js"]

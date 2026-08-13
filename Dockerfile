# Stage 1: Build Frontend Assets
FROM node:20-slim AS frontend
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN node node_modules/vite/bin/vite.js build

# Stage 2: Production PHP 8.2 + Nginx Server
FROM serversideup/php:8.2-fpm-nginx AS production

ENV AUTORUN_ENABLED=true
ENV WEBROOT=/var/www/html/public
WORKDIR /var/www/html

# Copy application code
COPY --chown=www-data:www-data . .
COPY --chown=www-data:www-data --from=frontend /app/public/build ./public/build

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Prepare SQLite database and directory permissions
RUN touch database/database.sqlite \
    && chown -R www-data:www-data database storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache database

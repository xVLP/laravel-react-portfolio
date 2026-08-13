# Multi-stage Dockerfile for Laravel + Inertia React Portfolio
FROM node:20-slim as frontend
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM php:8.2-cli
WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    sqlite3 \
    libsqlite3-dev \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions required by Laravel & SQLite/MySQL
RUN docker-php-ext-install pdo pdo_sqlite pdo_mysql mbstring bcmath

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy application files
COPY . .
COPY --from=frontend /app/public/build ./public/build

# Install PHP production dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Create SQLite database if missing & set permissions
RUN touch database/database.sqlite \
    && chmod -R 777 storage bootstrap/cache database

# Expose port (Railway / Render / Fly.io sets PORT env variable)
ENV PORT=8080
EXPOSE 8080

CMD ["sh", "-c", "touch database/database.sqlite && php artisan migrate --force --seed && php artisan serve --host=0.0.0.0 --port=${PORT:-8080}"]

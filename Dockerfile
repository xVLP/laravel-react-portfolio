# Single-stage Production PHP 8.2 + Nginx Dockerfile for Laravel + React
FROM serversideup/php:8.2-fpm-nginx AS production

ENV AUTORUN_ENABLED=true
ENV WEBROOT=/var/www/html/public
ENV PORT=8080
ENV HTTP_PORT=8080
EXPOSE 8080

WORKDIR /var/www/html

# Copy application files (including pre-compiled public/build assets)
COPY --chown=www-data:www-data . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Prepare SQLite database and set directory permissions
RUN touch database/database.sqlite \
    && chown -R www-data:www-data database storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache database

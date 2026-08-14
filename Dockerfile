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

# Ensure entrypoint hook directory exists and copy initialization script
RUN mkdir -p /etc/entrypoint.d
COPY deploy-init.sh /etc/entrypoint.d/99-laravel-init.sh
RUN chmod +x /etc/entrypoint.d/99-laravel-init.sh

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Prepare SQLite database file & permissions
RUN touch database/database.sqlite \
    && chown -R www-data:www-data database storage bootstrap/cache \
    && chmod -R 777 database storage bootstrap/cache

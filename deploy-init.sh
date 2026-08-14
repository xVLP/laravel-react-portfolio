#!/bin/sh
set -e

echo "==> Running Laravel database migrations..."
php /var/www/html/artisan migrate --force

echo "==> Seeding database..."
php /var/www/html/artisan db:seed --force

echo "==> Caching configuration and routes..."
php /var/www/html/artisan config:cache
php /var/www/html/artisan route:cache
php /var/www/html/artisan view:cache

echo "==> Deployment init completed successfully!"

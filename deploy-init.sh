#!/bin/sh
set -e

echo "==> Clearing application caches..."
php /var/www/html/artisan optimize:clear || true

echo "==> Rebuilding database schema and seeding default data..."
php /var/www/html/artisan migrate:fresh --force --seed

echo "==> Caching routes and views..."
php /var/www/html/artisan config:cache || true
php /var/www/html/artisan route:cache || true
php /var/www/html/artisan view:cache || true

echo "==> Deployment initialization finished successfully!"

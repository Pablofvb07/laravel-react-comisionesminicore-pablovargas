FROM php:8.3-cli

# dependencias básicas
RUN apt-get update && apt-get install -y \
    git curl unzip libpng-dev libonig-dev libxml2-dev zip

# extensiones PHP necesarias para Laravel
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath

# instalar composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

# copiar TODO tu proyecto tal cual está
COPY . .

# instalar dependencias (respeta tu composer.json actual)
RUN composer install --no-dev --optimize-autoloader --no-interaction

# permisos
RUN chmod -R 777 storage bootstrap/cache

EXPOSE 8000

# arrancar servidor Laravel
CMD php artisan serve --host=0.0.0.0 --port=8000
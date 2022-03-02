FROM php:8.0-cli-alpine

WORKDIR /opt/mongodb-php-gui
RUN cd /opt/mongodb-php-gui
RUN apk add git
RUN git clone https://github.com/SamuelTallet/MongoDB-PHP-GUI.git .

RUN apk update && apk add --no-cache --virtual .build-deps autoconf build-base openssl-dev curl \
  && pecl install mongodb-1.10.0 && docker-php-ext-enable mongodb \
  && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
  && apk del .build-deps \
  && composer install \
  && apk add --no-cache openjdk8-jre

EXPOSE 8000
CMD ["php", "-S", "0.0.0.0:8000"]
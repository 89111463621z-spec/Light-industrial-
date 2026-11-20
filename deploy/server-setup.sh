#!/bin/bash
# Установка сайта spb.otdelprodazhru.ru на сервер Ubuntu с nginx.
# Существующие сайты на сервере не трогает: добавляет отдельный конфиг.
set -e
DOMAIN=spb.otdelprodazhru.ru
DIR=/var/www/$DOMAIN
REPO=https://github.com/89111463621z-spec/Light-industrial-.git
BRANCH=claude/vigilant-albattani-hineis

apt-get update -y
apt-get install -y git nginx certbot python3-certbot-nginx

if [ -d "$DIR/.git" ]; then
  git -C "$DIR" pull -q --ff-only
else
  git clone -q --depth 1 -b "$BRANCH" "$REPO" "$DIR"
fi

cat > /etc/nginx/sites-available/$DOMAIN <<CONF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN;
    root $DIR;
    index index.html;
    location ~ /\.(git|github) { deny all; }
    location /deploy/ { deny all; }
    location ~* \.(jpg|jpeg|png|webp|css|js)$ { expires 7d; }
    location / { try_files \$uri \$uri/ =404; }
}
CONF
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/$DOMAIN

nginx -t
systemctl reload nginx

# Автообновление: каждые 5 минут сервер забирает свежую версию сайта с GitHub
echo "*/5 * * * * root git -C $DIR pull -q --ff-only" > /etc/cron.d/spb-site
chmod 644 /etc/cron.d/spb-site

echo
echo "ГОТОВО: сайт установлен в $DIR"
echo "Дальше: поменяйте DNS-запись spb на A 89.108.70.167, затем выполните:"
echo "  certbot --nginx -d $DOMAIN --redirect"

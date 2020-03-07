FROM nginx:stable-alpine

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

WORKDIR /usr/share/nginx/html
COPY dist /usr/share/nginx/html
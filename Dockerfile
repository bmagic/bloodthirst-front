FROM node:alpine AS builder
WORKDIR /usr/src/client

COPY . .
RUN npm install
RUN npm run-script build


FROM nginx:stable-alpine

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/client/dist /usr/share/nginx/html

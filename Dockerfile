FROM node:16 as base

WORKDIR /usr/local/app

COPY package.json .
COPY yarn.lock .

RUN npx yarn install
COPY ./ /usr/local/app

RUN npx yarn build

FROM nginx:latest AS ngi

COPY --from=base /usr/local/app/dist/ /usr/share/nginx/html/dist/
COPY /nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80


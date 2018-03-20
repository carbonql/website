FROM node:alpine

WORKDIR /code

COPY yarn.lock /code

RUN apk add --no-cache \
     alpine-sdk \
  && npm install -g gatsby-cli \
  && yarn

COPY . /code

CMD while true; do sleep 100; done

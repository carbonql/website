FROM node:alpine

WORKDIR /code

RUN apk add --no-cache \
     alpine-sdk \
  && npm install -g gatsby-cli

COPY . /code

CMD while true; do sleep 100; done

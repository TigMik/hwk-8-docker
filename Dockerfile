FROM ubuntu:20.04

FROM node:14.17.4

WORKDIR /code

COPY src /code/src

COPY package.json /code/package.json

RUN npm install

RUN npm install nodemon

CMD npm run start









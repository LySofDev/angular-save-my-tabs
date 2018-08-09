FROM node:8.11.3-alpine
RUN mkdir /save-my-tabs
COPY package*.json /save-my-tabs/
WORKDIR /save-my-tabs
RUN npm install
COPY . /save-my-tabs

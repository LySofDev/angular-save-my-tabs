FROM node:8.11.3-alpine
RUN npm install -g yarn && \
    yarn global add @angular/cli
RUN mkdir /save-my-tabs
COPY package*.json /save-my-tabs/
WORKDIR /save-my-tabs
RUN yarn
COPY . /save-my-tabs

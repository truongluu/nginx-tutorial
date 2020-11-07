FROM node:alpine3.12
RUN mkdir -p /home/app
WORKDIR /home/app

COPY package.* ./
RUN yarn
COPY . .

ENV APPID=111

EXPOSE 9999

CMD node index.js
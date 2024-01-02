FROM node:20-alpine

WORKDIR /root/app

COPY . . 

RUN npm install

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]

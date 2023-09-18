FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install --verbose

RUN npm run lint --verbose

RUN npm run build --verbose

CMD [ "npm", "start" ]
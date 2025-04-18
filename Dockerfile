FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8086

CMD ["node", "app.js"]

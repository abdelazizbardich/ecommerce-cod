FROM node:18-alpine
RUN mkdir -p /home/www
RUN mkdir -p /home/www/html
WORKDIR /var/www/html
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","run","start:prod"]
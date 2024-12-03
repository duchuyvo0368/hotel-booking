FROM node:17
WORKDIR /backend
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 5000
CMD npm start

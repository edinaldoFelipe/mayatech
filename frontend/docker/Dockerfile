FROM node:16

WORKDIR /usr/src/maya/app

COPY package*.json ./

RUN npm install

## to init a new project
# RUN npm init -y
# RUN npm i axios
# RUN npm i core-js
# RUN npm i vue
# RUN npm i bootstrap

EXPOSE 8080

CMD ["npm", "run", "serve"]
FROM node:16

WORKDIR /usr/src/maya/api

COPY package*.json ./

RUN npm install

## to init a new project
# RUN npm init -y
# RUN npm i express
# RUN npm i cors
# RUN npm i morgan
# RUN npm i body-parser
# RUN npm i -g nodemon
# RUN npm i dotenv

EXPOSE 3080

CMD ["npm", "run", "serve"]
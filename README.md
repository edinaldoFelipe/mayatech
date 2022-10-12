# Mayatech Shortener

Node URL shortener with a JSON RESTful API and Vue.js

## Avaliable

- Coding style and general ability to create great structured code and APIs
- Understanding of using RESTful web services and parsing structured data
- Knowledge of using databases
- Knowledge of good practice 3rd party frameworks and libraries
- Anything else you would like to demonstrate to us (e.g unit testing
etc)

## Requeriments

- Node.js
- Vue.js
- PostgreSQL
- Input JSON validation
- Error handling eg. HTTP status codes

## Install

### Clone repository

```bash
git clone https://github.com/edinaldoFelipe/mayatech.git maya
```

### Open folder

```bash
cd maya
```

### Copy and rename .env into backend and frontend folders

```bash
cp backend/.env-example backend/.env
cp frontend/.env-example frontend/.env
```

### Run docker compose

```bash
docker-compose up -d --build
```

### Open Adminer

Password **`admin`**

```bash
http://localhost:5050/?pgsql=postgres&username=root&db=maya
```

### Create Database Table

```bash
CREATE TABLE IF NOT EXISTS urls (
	id serial PRIMARY KEY,
	short VARCHAR(10) UNIQUE NOT NULL,
	url TEXT UNIQUE NOT NULL
);
```

### Browser url

```text
localhost:8080
```

# Unit Test

## Backend

Enter into container docker

```bash
docker exec -it node-api bash
```

```bash
npm test
```

# API Documentation

> ## All Urls

### Requisition

> **GET** /api/

### Success Response

**Code:** `200 Success`

### Example

```json
{
  "id": 1,
  "short": "ad934",
  "full": "https://google.com.br"
 },
 {
  "id": 2,
  "short": "lqp73",
  "full": "http://mayateck.com"
 }
```

### Error Response

**Code:** `404 Not Found`

> ## Full Url

## Requisition

> **GET** /api/{short}

### Success Response

**Code:** `200 OK`

### Example

```json
{
	"url": "https://google.com.br"
}
```

### Error Response

**Code:** `404 Not Found`

## Create Short Url

## Requisition

> **POST** /

### Example

### Request Body

```json
{
	"short": "lqp73",
	"full": "http://mayateck.com"
}
```

### Success Response

**Code:** `201 Created`

```json
{
 "short": "lqp73",
 "full": "http://mayateck.com"
}
```

### Error Response

**Code:** `304 Not Modified`

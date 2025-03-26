# Evershop-e-commerce-app

![Landing Page](media/landing-page.png)

[![Watch the Demo](https://img.youtube.com/vi/_Kf75Zwh6sE/0.jpg)](https://www.youtube.com/watch?v=_Kf75Zwh6sE)

[[Watch the demo video in YouTube]](https://youtu.be/_Kf75Zwh6sE)

---

Welcome to **Evershop E-Commerce App**, an application with backend services for managing products and categories in an E-commerce store. This application integrates with EverShop and allows seamless product and category creation.

---

## Features

- Add a single product to EverShop
- Bulk upload products from a JSON file
- Create categories dynamically if they do not exist
- Fully structured **Express.js** backend with **CommonJS** module system

---

## Setup & Installation

### **Clone the Repository**

```sh
git clone https://github.com/kirankumar-Matham96/Evershop-e-commerce-app.git
cd my-evershop-api
```

### **Install Dependencies**

```sh
npm install
```

### **Configure Environment Variables**

Create a `.env` file in the root directory and add:

```env

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres

DB_NAME=<YOUR_DB_NAME>
DB_SSLMODE=disable

POSTGRES_PASSWORD=postgres
POSTGRES_USER=postgres
POSTGRES_DB=postgres

API_BASE_URL=http://localhost:3000/api
ADMIN_COOKIE=<YOUR_EVERSHOP_ADMIN_COOKIE>

```

**_NOTE_**: Also, create a **dummyData.json** in thr root to place the data as you like. Make sure that the required fields should be included in the product details.

### **Start the Server**

```sh
npm start
```

The server will run on **http://localhost:3000**.

---

## API Endpoints

[Postman Collection](https://documenter.getpostman.com/view/15920123/2sAYkLmGz1)

## Project Structure

```
my-evershop-api/
│── .evershop/
│── media/
│── node_modules/
│── public/
│── src/
│   ├── features/
│   │   ├── category/
│   │   │   ├── controller.js
│   │   │   ├── routes.js
│   │   ├── products/
│   │   │   ├── controller.js
│   │   │   ├── routes.js
│   ├── middlewares/
│   │   ├── errorHandling.middleware.js
│   ├── utils/
│   │   ├── customError.js
│── .env
│── dummyData.json
│── .gitignore
│── server.js
│── package-lock.json
│── package.json
│── README.md
│── server.js
```

---

Happy Coding!

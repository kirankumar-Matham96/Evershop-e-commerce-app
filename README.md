# Evershop-e-commerce-app

<!-- Landing Page Image (Full Width) -->
<p align="center">
  <img src="https://res.cloudinary.com/kiran-commerce-app/image/upload/v1743021179/landing-page_z9gaod.png" alt="Landing Page" width="100%">
</p>

<!-- YouTube Video (Full Width + Open in New Tab) -->
<p align="center">
  <a href="https://www.youtube.com/watch?v=_Kf75Zwh6sE" target="_blank">
    <img src="https://img.youtube.com/vi/_Kf75Zwh6sE/0.jpg" alt="Watch the Demo" width="70%">
  </a>
</p>

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

## Prerequisites

Before setting up the application, ensure you have the following installed on your system:

### **Node.js** (v16+ recommended)

- Download & Install from: [https://nodejs.org/](https://nodejs.org/)
- Verify installation:
  ```sh
  node -v
  ```

### **PostgreSQL** (Database)

- Download & Install from: [https://www.postgresql.org/download/](https://www.postgresql.org/download/)
- Start PostgreSQL service:
  Linux/macOS
  ```sh
  sudo systemctl start postgresql
  ```
  macOS with Homebrew
  ```sh
  pg_ctl -D /usr/local/var/postgres start
  ```
  Windows
  ```sh
  net start postgresql
  ```
- Verify connection:
  ```sh
  psql -U postgres
  ```

Once these dependencies are installed, follow the [Setup & Installation](#setup--installation) steps.

## Setup & Installation

You can refer [EverShop](https://evershop.io/) for the initial setup.

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

    Note: to use API endpoints, keep the app running and open new terminal. CD to the app directory and run the below command:

    ```sh
    npm run api
    ```

    now you can use the postman or any other client to test the APIs.

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

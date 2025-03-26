// import "dotenv/config";
// import express from "express";
// import CORS from "cors";
// import http from "http";
// import { handleError } from "./src/middlewares/errorHandling.middleware.js";
// import { productsRouter } from "./src/features/products/routes.js";

// /**
//  *  * If works, write a unction to push products from file to evershop API
//  *  * Add routes to create category if the provided category is not available.
//  */

// const app = express();
// const server = http.createServer(app);
// const PORT = process.env.PORT;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(CORS());

// app.use("/api/products", productsRouter);

// // error handling
// app.use(handleError);

// app.get("/", (req, res) => {
//   res.status(200).json({ success: true, message: "Welcome to Evershop APIs" });
// });

// server.listen(PORT || 5002, () => {
//   console.log(`Server is running at: http://localhost:${PORT || 5002}`);
// });

require("dotenv/config");
const express = require("express");
const CORS = require("cors");
const http = require("http");
const  handleError  = require("./src/middlewares/errorHandling.middleware.js");
const { productsRouter } = require("./src/features/products/routes.js");
const { categoryRouter } = require("./src/features/category/routes.js");

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CORS());

app.use("/api/products", productsRouter);
app.use("/api/categories", categoryRouter);

// error handling
app.use(handleError);

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to Evershop APIs" });
});

server.listen(PORT || 5002, () => {
  console.log(`Server is running at: http://localhost:${PORT || 5002}`);
});

// import { Router } from "express";
// import productsController from "./controller.js";

// export const productsRouter = Router();

// productsRouter.post("/", productsController.addOneProduct);
// productsRouter.post("/add-from-file", productsController.addMany);
// // productsRouter.get("/", productsController.getAllProducts);

const { Router } = require("express");
const productsController = require("./controller.js");

const productsRouter = Router();

productsRouter.post("/", productsController.addOneProduct);
productsRouter.post("/add-from-file", productsController.addMany);
// productsRouter.get("/", productsController.getAllProducts);

module.exports = { productsRouter };

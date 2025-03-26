const { Router } = require("express");
const productsController = require("./controller.js");

const productsRouter = Router();

productsRouter.post("/", productsController.addOneProduct);
productsRouter.post("/add-from-file", productsController.addMany);

module.exports = { productsRouter };

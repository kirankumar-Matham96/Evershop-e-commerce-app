const { Router } = require("express");
const categoryController = require("./controller.js");

const categoryRouter = Router();

categoryRouter.post("/", categoryController.addCategory);
categoryRouter.delete("/:id", categoryController.deleteCategory);

module.exports = { categoryRouter };

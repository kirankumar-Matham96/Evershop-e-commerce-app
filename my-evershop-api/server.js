require("dotenv/config");
const express = require("express");
const CORS = require("cors");
const handleError = require("./src/middlewares/errorHandling.middleware.js");
const { productsRouter } = require("./src/features/products/routes.js");
const { categoryRouter } = require("./src/features/category/routes.js");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CORS());

app.use("/api/products", productsRouter);
app.use("/api/categories", categoryRouter);

app.use(handleError);

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to Evershop APIs" });
});

server.listen(PORT || 5002, () => {
  console.log(`Server is running at: http://localhost:${PORT || 5002}`);
});

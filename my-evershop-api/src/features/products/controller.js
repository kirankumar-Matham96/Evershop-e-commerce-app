const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { fileURLToPath } = require("url");
const { CustomError } = require("../../utils/customError.js");

class ProductsController {
  addOneProduct = async (req, res, next) => {
    try {
      const {
        sku,
        price,
        qty,
        title: name,
        visibility,
        manage_stock,
        stock_availability,
        url_key,
        weight,
        description,
        short_description,
        meta_title,
        meta_description,
        meta_keywords,
        images,
        category,
        status,
        group_id,
        category_id,
        attributes,
        options,
      } = req.body;

      const productData = {
        sku,
        price: parseFloat(price).toFixed(2),
        qty: parseInt(qty),
        name,
        visibility: parseInt(visibility),
        manage_stock: manage_stock ? parseInt(manage_stock) : 0,
        stock_availability: stock_availability
          ? parseInt(stock_availability)
          : 1,
        url_key,
        weight,
        description,
        short_description,
        meta_title,
        meta_description,
        meta_keywords,

        category,
        images: Array.isArray(images) ? images : [images],
        status: status ? parseInt(status) : 1,
        group_id,
        category_id,
        attributes: attributes || [],
        options: options || [],
      };

      const product = await axios.post(
        `${process.env.API_BASE_URL}/products`,
        productData,
        {
          headers: {
            Accept: "application/json",
            Cookie: process.env.ADMIN_COOKIE,
          },
        }
      );

      return res.status(201).json({
        success: true,
        message: "Product added successfully",
        product: product?.data || "No response data",
      });
    } catch (error) {
      console.error(
        "🚀 ~ Error Response:",
        error.response?.data || error.message,
        "\n\n\n"
      );
      console.error("🚀 ~ Error Stack:", error.stack, "\n\n\n");
      next(error);
    }
  };

  addMany = async (req, res, next) => {
    try {
      const filePath = path.join(path.resolve(), "dummyData.json");
      const rawData = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(rawData);

      const adjustedData = data.products.map((product) => {
        const adjustedProductData = {
          sku: product.sku,
          price: product.price,
          qty: product.qty || 200,
          name: product.title,
          visibility: product.visibility || 1,
          weight: product.weight || "",
          description: product.description,
          short_description: product.short_description || product.title,
          manage_stock: product.manage_stock || 1,
          stock_availability: product.stock_availability || 1,
          url_key: product.title.replaceAll(" ", "-").toLowerCase(),
          meta_title: product.meta_title || product.title,
          meta_description: product.meta_description || product.title,
          meta_keywords: product.meta_keywords || product.title,
          category: product.category,
          images: product.images || [],
          status: product.status || 1,
          attributes: product.attributes || [],
          options: product.options || [],

          category_id: "",
          group_id: 1,
        };

        if (adjustedProductData.category.toLowerCase() === "furniture") {
          adjustedProductData.category_id = 6;
        } else if (adjustedProductData.category.toLowerCase() === "beauty") {
          adjustedProductData.category_id = 4;
        } else if (
          adjustedProductData.category.toLowerCase() === "fragrances"
        ) {
          adjustedProductData.category_id = 5;
        } else {
          adjustedProductData.category_id = 7;
        }

        return adjustedProductData;
      });

      const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      const responses = [];

      // This loop will execute the insert route for every 100ms
      // This will make sure the api will not be exhausted(with rate limiter if any)
      for (let productData of adjustedData) {
        try {
          const productResponse = await axios.post(
            `${process.env.API_BASE_URL}/products`,
            productData,
            {
              headers: {
                Accept: "application/json",
                Cookie: process.env.ADMIN_COOKIE,
              },
            }
          );
          responses.push(productResponse);
          sleep(100);
        } catch (error) {
          console.log(error);
        }
      }

      return res.status(201).json({
        success: true,
        message: "Documents inserted successfully",
        products: responses,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new ProductsController();

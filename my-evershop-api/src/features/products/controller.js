// import fs from "fs";
// import path from "path";
// import axios from "axios";
// import { fileURLToPath } from "url";
// import { CustomError } from "../../utils/customError.js";

// class ProductsController {
//   addOneProduct = async (req, res, next) => {
//     try {
//       const {
//         sku,
//         price,
//         qty,
//         title: name,
//         visibility,
//         manage_stock,
//         stock_availability,
//         url_key,
//         weight,
//         description,
//         short_description,
//         meta_title,
//         meta_description,
//         meta_keywords,
//         images,
//         category,
//         status,
//         group_id,
//         category_id,
//         attributes,
//         options,
//       } = req.body;

//       const productData = {
//         sku,
//         price: parseFloat(price).toFixed(2),
//         qty: parseInt(qty),
//         name,
//         visibility: parseInt(visibility),
//         manage_stock: manage_stock ? parseInt(manage_stock) : 0,
//         stock_availability: stock_availability
//           ? parseInt(stock_availability)
//           : 1,
//         url_key,
//         weight,
//         description,
//         short_description,
//         meta_title,
//         meta_description,
//         meta_keywords,

//         category: "Women",
//         images: Array.isArray(images) ? images : [images],
//         status: status ? parseInt(status) : 1,
//         group_id,
//         category_id,
//         attributes: attributes || [],
//         options: options || [],
//       };

//       const product = await axios.post(process.env.API_BASE_URL, productData, {
//         headers: {
//           Accept: "application/json",
//           Cookie: process.env.ADMIN_COOKIE,
//         },
//       });

//       return res.status(201).json({
//         success: true,
//         message: "Product added successfully",
//         product: product?.data || "No response data",
//       });
//     } catch (error) {
//       console.log(
//         "🚀 ~ ProductsController ~ addOneProduct= ~ error:",
//         error,
//         "\n\n\n"
//       );
//       console.error(
//         "🚀 ~ Error Response:",
//         error.response?.data || error.message,
//         "\n\n\n"
//       );
//       console.error("🚀 ~ Error Stack:", error.stack, "\n\n\n");
//       next(error);
//     }
//   };

//   addMany = async (req, res, next) => {
//     try {
//       const __filename = fileURLToPath(import.meta.url);
//       const __dirname = path.dirname(__filename);
//       const filePath = path.join(__dirname, "../../../dummyData.json");
//       const rawData = fs.readFileSync(filePath, "utf8");
//       const data = JSON.parse(rawData);

//       const adjustedData = data.map((product) => {
//         // modify the data here
//         product = {
//           sku: product.sku,
//           price: product.price,
//           qty: product.qty || 200,
//           name: product.title,
//           visibility: product.visibility || 1,
//           manage_stock: product.manage_stock || 1,
//           stock_availability: product.stock_availability || 1,
//           url_key: product.title.replaceAll("s", "-").toLowerCase(),
//           weight: product.weight || "",
//           description: product.description,
//           short_description: product.short_description || product.title,
//           meta_title: product.meta_title || product.title,
//           meta_description: product.meta_description || product.title,
//           meta_keywords: product.meta_keywords || product.title,
//           category: product.category,
//           images: product.images || [],
//           status: product.status || 1,
//           group_id: product.group_id || 1,
//           category_id: product.category_id || 2,
//           attributes: product.attributes || [],
//           options: product.options || [],
//         };
//       });

//       adjustedData.forEach((product) => {
//         // call the api here to insert the data
//         // give 100ms for every api call to make API not exhaust for many products later
//         // const product = await axios.post(process.env.API_BASE_URL, productData, {
//         //   headers: {
//         //     Accept: "application/json",
//         //     Cookie: process.env.ADMIN_COOKIE,
//         //   },
//         // });
//       });

//       return res
//         .status(201)
//         .json({ success: true, message: "Documents inserted successfully" });
//     } catch (error) {
//       console.log("🚀 ~ ProductsController ~ addMany= ~ error:", error);
//       next(error);
//     }
//   };

//   // getAllProducts = async (req, res, next) => {
//   //   try {
//   //     // get products from EverShop api

//   //     //   const products = () => {
//   //     //     // get products here
//   //     //   };
//   //     console.log("Fetching products...");
//   //     return res.status(200).json({
//   //       success: true,
//   //       // products,
//   //     });
//   //   } catch (error) {
//   //     next(error);
//   //   }
//   // };

//   // getById = async (req, res, next) => {
//   //   try {
//   //     const { id } = req.params;
//   //     console.log("Fetching product...");

//   //     const product = await axios.get(
//   //       `http://localhost:3000/api/products/${id}`
//   //     );

//   //     console.log("Product Details:", product.data);

//   //     return res.status(200).json({
//   //       success: true,
//   //       product,
//   //     });
//   //   } catch (error) {
//   //     next(error);
//   //   }
//   // };
// }

// export default new ProductsController();

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

        category: "Women",
        images: Array.isArray(images) ? images : [images],
        status: status ? parseInt(status) : 1,
        group_id,
        category_id,
        attributes: attributes || [],
        options: options || [],
      };

      const product = await axios.post(process.env.API_BASE_URL, productData, {
        headers: {
          Accept: "application/json",
          Cookie: process.env.ADMIN_COOKIE,
        },
      });

      return res.status(201).json({
        success: true,
        message: "Product added successfully",
        product: product?.data || "No response data",
      });
    } catch (error) {
      console.log(
        "🚀 ~ ProductsController ~ addOneProduct= ~ error:",
        error,
        "\n\n\n"
      );
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
      const __filename = fileURLToPath(__filename);
      const __dirname = path.dirname(__filename);
      const filePath = path.join(__dirname, "../../../dummyData.json");
      const rawData = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(rawData);

      const adjustedData = data.map((product) => {
        return {
          sku: product.sku,
          price: product.price,
          qty: product.qty || 200,
          name: product.title,
          visibility: product.visibility || 1,
          manage_stock: product.manage_stock || 1,
          stock_availability: product.stock_availability || 1,
          url_key: product.title.replaceAll("s", "-").toLowerCase(),
          weight: product.weight || "",
          description: product.description,
          short_description: product.short_description || product.title,
          meta_title: product.meta_title || product.title,
          meta_description: product.meta_description || product.title,
          meta_keywords: product.meta_keywords || product.title,
          category: product.category,
          images: product.images || [],
          status: product.status || 1,
          group_id: product.group_id || 1,
          category_id: product.category_id || 2,
          attributes: product.attributes || [],
          options: product.options || [],
        };
      });

      adjustedData.forEach((product) => {
        // call the api here to insert the data
        // give 100ms for every api call to make API not exhaust for many products later
        // const product = await axios.post(process.env.API_BASE_URL, productData, {
        //   headers: {
        //     Accept: "application/json",
        //     Cookie: process.env.ADMIN_COOKIE,
        //   },
        // });
      });

      return res
        .status(201)
        .json({ success: true, message: "Documents inserted successfully" });
    } catch (error) {
      console.log("🚀 ~ ProductsController ~ addMany= ~ error:", error);
      next(error);
    }
  };
}

module.exports = new ProductsController();

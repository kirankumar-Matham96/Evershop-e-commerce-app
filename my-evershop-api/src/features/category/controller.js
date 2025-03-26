const { default: axios } = require("axios");

class CategoryController {
  addCategory = async (req, res, next) => {
    try {
      const {
        name,
        description,
        meta_title,
        meta_description,
        url_key,
        status,
        include_in_nav,
      } = req.body;

      // Required fields
      const categoryData = {
        name,
        description,
        meta_title,
        meta_description,
        url_key,
        status: status || 1,
        include_in_nav,
      };

      const category = await axios.post(
        `${process.env.API_BASE_URL}/categories`,
        categoryData,
        {
          headers: {
            Accept: "application/json",
            Cookie: process.env.ADMIN_COOKIE,
          },
        }
      );

      console.log(
        "🚀 ~ CategoryController ~ addCategory= ~ category:",
        category.data
      );

      res.status(201).json({
        success: true,
        message: `Created ${name} category`,
        category: category.data,
      });
    } catch (error) {
      console.log("🚀 ~ CategoryController ~ addCategory= ~ error:", error);
      next(error);
    }
  };

  deleteCategory = async (req, res, next) => {
    try {
      const { id } = req.params;

      const response = await axios.delete(`${API_BASE_URL}/categories/${id}`);

      console.log(
        "🚀 ~ CategoryController ~ deleteCategory ~ response:",
        response.data
      );

      res
        .status(200)
        .json({ success: true, message: "category deleted successfully" });
    } catch (error) {
      console.log("🚀 ~ CategoryController ~ deleteCategory ~ error:", error);
      next(error);
    }
  };
}

module.exports = new CategoryController();

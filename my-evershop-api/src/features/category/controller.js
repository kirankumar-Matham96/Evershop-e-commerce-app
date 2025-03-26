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
      res.status(201).json({
        success: true,
        message: `Created ${name} category`,
        category: category.data,
      });
    } catch (error) {
      next(error);
    }
  };

  deleteCategory = async (req, res, next) => {
    try {
      const { id } = req.params;

      await axios.delete(`${API_BASE_URL}/categories/${id}`);
      res
        .status(200)
        .json({ success: true, message: "category deleted successfully" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new CategoryController();

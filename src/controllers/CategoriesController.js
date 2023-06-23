import Categories from "../models/CategoriesModel.js";
class categoriesController {
  static async listarCategorias(_req, res) {
    try {
      const categories = await Categories.find({});
      console.log(categories);
      if (categories.length <= 0) {
        res.status(204).json({ message: 'No Content' });
      } else {
        res.status(200).json(categories);
      }
    } catch (err) {
      res.status(500).json({ message: 'erro' });
    }
  }
};

export default categoriesController;
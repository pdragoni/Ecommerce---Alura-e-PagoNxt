import Categories from "../models/CategoriesModel";

class categoriesController {
  static async listarCategorias(req, res) {
    try {
      const categories = await Categories.find();
      if (categories.length <= 0) {
        res.status(204).json({ message: 'No Content' });
      } else {
        res.status(200).json(categories);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export default categoriesController;
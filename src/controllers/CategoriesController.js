import Categories from "../models/CategoriesModel.js";
class categoriesController {
  static async listarCategorias(_req, res) {
    try {
      const categories = await Categories.find({});
      if (categories.length <= 0) {
        res.status(204).json({ message: 'No Content' });
      } else {
        res.status(200).json(categories);
      }
    } catch (err) {
      res.status(500).json({ message: 'erro' });
    }
  }

  static async listarCategoriaPorId(req, res) {
    const { id } = req.params;
    try {
      const category = await Categories.findById(id).exec();
      console.log(category)
      if (!category) {
        res.status(404).send('not found');
      } else {
        res.status(200).json(category);
      }
    } catch (err) {
      res.status(500).json({ message: 'erro' })
    }
  }
};

export default categoriesController;
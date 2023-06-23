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

    // console.log('category');
    try {
      const category = await Categories.findById(id);
      // console.log('category');
      if (!category) {
        res.status(404).json({ message: 'not found' });
      } else {
        res.status(200).json(category);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'erro' })
    }
  }

  static async cadastrarCategoria(req, res) {
    let { nome, status } = req.body;
    if (nome.length <= 3) res.send('"Nome" deve conter 5 caracteres pelo menos');
    if (!status) { status = 'INATIVA' };
    try {
      nome = nome.toUpperCase();
      const category = new Categories({
        nome, status,
      });
      await category.save();
      res.status(201).send('Categoria cadastrada com sucesso')
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'erro' })
    }
  }
};

export default categoriesController;
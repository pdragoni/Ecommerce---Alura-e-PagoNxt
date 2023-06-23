import { CategoryService } from "./CategoryService.js";
const { createCategory, findCategories, findCategoryById, updateCategory } = CategoryService;

const args = process.argv;

async function processarComando() {
  switch (args[2]) {
    case "--listarCategorias":
      // console.log('--listar', args) 
      const categories = await findCategories()
      return categories;

    case "--recuperarCategoriaPorId":
      // console.log('--porId', args)
      let id = Number(args[3]);
      const category = await findCategoryById(id);
      return category;

    case "--inserirCategoria":
      let jsonPath = args[3];
      const newCategory = await createCategory(jsonPath);
      return newCategory;

    case "--atualizarCategoria":
      let idToUpdate = Number(args[3])
      let path = args[4];

      return updateCategory(idToUpdate, path);

    case "--excluirCategoria":
      // console.log(id)
      return deleteCategory(id);

    default:
      console.log("default", args);
  }

};

processarComando();
import { findCategories, findCategoryById } from "./CategoryService";

const args = process.argv /

  async function processarComando() {
    console.log(args);
    switch (args[2]) {
      case "--listarCategorias":
        console.log('--listar', args)
        const categories = await findCategories()
        return categories;
      case "--recuperarCategoriaPorId":
        console.log('--porId', args)
      // return findCategoryById();
      default:
        console.log("default", args);
    }
  };

processarComando(args);
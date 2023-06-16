import fs from "fs";
import db from "./db.json" assert { type: "json"}; // static import assertion (  code: 'ERR_IMPORT_ASSERTION_TYPE_MISSING')

export class CategoryService {
  static async findCategories() {
    const url = "http://localhost:3000/categories";
    try {
      const response = await fetch(url)
      const { status } = response;
      const responseJson = await response.json();

      // const resposta = `response status ${status} \n ${categories}`;
      // console.log(resposta);

      console.log("status response", status);
      console.log(responseJson);
    }
    catch (err) {
      console.log(err);
    }
  }

  static async findCategoryById(id) {
    const url = "http://localhost:3000/categories";
    try {
      const response = await fetch(url)
      const { status } = response;
      const responseJson = await response.json();
      const category = await responseJson.filter(cat => cat.id === Number(id))[0]; // retorna um array com um objeto categoria
      category ? console.log("response status:", status, category) : console.log("Category Not Found");
    } catch (err) {
      console.log(err)
    }
  }

  static async createCategory(query) {
    // const encoding = 'utf-8';
    // const db = await fs.readFile("./src/cli/db.json");
    console.log("db", db);
    return query
    // const jsonPath = "./src/cli/novaCategoria.json";
    // const newCategory = await fs.promises.writeFile(db.json, jsonPath, (err) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   else {
    //     console.log("File written su")
    //   }
    // });
    // }
  }
}
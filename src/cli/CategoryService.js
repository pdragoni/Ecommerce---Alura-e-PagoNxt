import fs from "fs";

const jsonHandler = (jsonPath) => {
  const rawData = fs.readFileSync(jsonPath);
  const data = JSON.parse(rawData);
  return data;
}

const errorHandler = (err) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log("File written su")
  };
};

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
    const jsonPath = "./src/cli/novaCategoria.json";
    const dbPath = "./src/cli/db.json";

    const { nome, status } = jsonHandler(jsonPath);

    const db = jsonHandler(dbPath);

    const id = db.categories.length + 1;

    const newCategory = {
      id, nome, status,
    };

    db.categories.push(newCategory);

    const newData = JSON.stringify(db, null, 2);
    fs.writeFileSync(dbPath, newData, errorHandler);
    console.log(db.categories);

  }
}
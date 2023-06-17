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
      const category = await responseJson.filter(cat => cat.id === id)[0]; // retorna um array com um objeto categoria
      category ? console.log("response status:", status, category) : false;
    } catch (err) {
      errorHandler(err)
    }
  }

  static async createCategory(jsonPath) {
    const url = "http://localhost:3000/categories";

    const dbPath = "./src/cli/db.json";

    const { nome, status } = jsonHandler(jsonPath);

    const db = jsonHandler(dbPath);

    const id = db.categories.length + 1;

    const newCategory = {
      id, nome, status,
    };

    const insertOptions = {
      method: "POST",
      headers: { "Content-type": 'application/json' },
      body: JSON.stringify(newCategory),
    }

    try {
      const response = await fetch(url, insertOptions);
      const novaCategoria = await response.json();
      console.log("response status", response.status, "response data", novaCategoria);
    }

    catch (err) {
      errorHandler(err);
    }

  }

  static async deleteCategory(id) {
    const dbPath = "./src/cli/db.json";
    const db = jsonHandler(dbPath);

    const categoryToBeRemoved = findIndex((cat) => cat.id === id);
    return db.categories.splice(categoryToBeRemoved);

    // console.log(db.categories);
  }

  static async updateCategory(id, jsonPath) {
    const { nome, status } = jsonHandler(jsonPath);
    const url = `http://localhost:3000/categories/${id}`;

    // const dbPath = "./src/cli/db.json";
    // const db = jsonHandler(dbPath)

    try {
      const newCategory = {
        nome, status,
      };
      const updateOptions = {
        method: "PUT",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newCategory),
      };

      console.log(newCategory);
      const result = await fetch(url, newCategory);
      const categoriaAtualizada = await result.json();
      console.log("response status", result.status, "categoria atualizada", categoriaAtualizada);
    }
    catch (err) {
      errorHandler(err)
    }
  }
}
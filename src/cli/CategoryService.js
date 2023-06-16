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
}
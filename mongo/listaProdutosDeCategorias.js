const filter = { "categoria": { $in: ["LIVROS", "CELULARES"] } };

// const projection = { _id: 1, nome: 1, preco: 1 };
const projection = {};

const filteredProducts = db.products.find(filter, projection);

console.log(filteredProducts);
const filter = { preco: { $gte: 1000, $lte: 2000 } };
const projection = { _id: 1, nome: 1, preco: 1 };

const filteredProducts = db.products.find(filter, projection);

console.log(filteredProducts);
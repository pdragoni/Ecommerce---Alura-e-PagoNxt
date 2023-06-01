use("mongo-ecomm")

const newProducts = require('./ecommProdutos.json');

const result = db.products.insertMany(newProducts)
console.log(result);


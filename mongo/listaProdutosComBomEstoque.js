use("mongo-ecomm");

const filter = { "estoque": { $gte: 3 }};
const projection = { "_id": 1, nome: 1, estoque: 1}; // what must be shown

const result = db.products.find(filter, projection);

console.log(result);
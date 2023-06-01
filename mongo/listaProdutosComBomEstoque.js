use("mongo-ecomm");

const filter = { "ESTOQUE": { $gte: 3 }};
const projection = { "_id": 1, NOME: 1, ESTOQUE: 1}; // what must be shown

const result = db.products.find(filter, projection);

console.log(result);
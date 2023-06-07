
const filter = { "categoria": "LIVROS" };
const action = { $set: { "estoque": 0 } };

const update = db.products.updateMany(filter, action);
console.log(update)
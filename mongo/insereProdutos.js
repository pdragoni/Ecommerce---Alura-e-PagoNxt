const newProducts = require('./ecommProdutos.json');

use("mongo-ecomm");

db.products.drop(function (err, delOK) {
  if (err) throw err;
  if (delOK) console.log("Collection deleted");
  db.close();
});

const result = db.products.insertMany(newProducts)
console.log(result);


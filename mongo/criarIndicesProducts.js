const categoryIdCreation = db.products.createIndex(
  {
    "categorias": 1
  },
  {
    unique: true,
    sparse: true,
    expireAfterSeconds: 3600,
    name: "category_id"
  }
)
console.log(categoryIdCreation);

const productIdCreation = db.products.createIndex({
  "nome": 1
}, {
  unique: true,
  sparse: true,
  expireAfterSeconds: 3600,
  name: "product_id"
})
console.log(productIdCreation);
// console.log(db.products.find());
console.log('Fim do arquivo')

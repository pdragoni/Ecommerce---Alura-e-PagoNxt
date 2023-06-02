const indexCreation = db.products.createIndex(
  {
    "nome": 1
  },
  {
    unique: true,
    sparse: true,
    expireAfterSeconds: 3600,
    name: "product_id"
  }
)
console.log(indexCreation);
console.log('Fim do arquivo')

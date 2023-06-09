use("mongo-ecomm");

const didico = db.accounts.findOne({ "nome": "Diego Dias Corrêa" });
// console.log(didico);

const productOrdered = db.products.findOne({ "nome": "Galaxy Tab S8" });
// console.log(productOrdered);

const order = {
  dataPedido: new Date(),
  account: {
    accountId: didico._id,
    nome: didico.nome,
  },
  enderecoEntrega: didico.endereco,
  items: [{
    productId: productOrdered._id,
    quantidade: 2,
    desconto: 0.5,
    precoUnitario: productOrdered.preco
  }],
};

db.orders.insertOne(order);
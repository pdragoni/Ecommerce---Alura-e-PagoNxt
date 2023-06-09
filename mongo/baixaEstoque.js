use("mongo-ecomm");

const didico = db.accounts.findOne({ "nome": "Diego Dias Corrêa" });
// console.log(didico);

const productOrdered = db.products.findOne({ "nome": "Galaxy Tab S8" });
// console.log(productOrdered);

const itensDoPedido = [{
  productId: productOrdered._id,
  quantidade: 2,
  desconto: 0.5,
  precoUnitario: productOrdered.preco
}];

const order = {
  dataPedido: new Date(),
  account: {
    accountId: didico._id,
    nome: didico.nome,
  },
  enderecoEntrega: didico.endereco,
  items: [itensDoPedido],
};

const productId = productOrdered._id;

itensDoPedido.forEach(item => {
  const updateFilter = { "_id": item.productId, "estoque": { $gte: item.quantidade } };
  const updateAction = { $inc: { "estoque": - item.quantidade } };
  const update = db.products.updateOne(updateFilter, updateAction);
  // console.log(update);
});

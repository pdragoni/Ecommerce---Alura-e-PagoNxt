use("mongo-ecomm");

const nome = "ESPORTE"
const filtro = { "nome": nome}
const update = { $set: { status: "ATIVA"}}
const options = { returnOriginal: false }
const result = db.categories.findOneAndUpdate(filtro, update, options);

console.log(result);

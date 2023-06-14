use("mongo-ecomm");

const userAccounts = [
  {
    nome: "Ana Azevedo",
    email: "odeveza.ana@gmail.com",
    senha: "Password@123",
    dataCriacao: new Date(),
    cpf: "98452997175",
    telefone: "62987654321",
    endereco: {
      rua: "Avenida Goiânia",
      numero: "100",
      bairro: "Jardim Nova Goiânia",
      cep: "62321000",
      cidade: "Goiânia",
      uf: "GO"
    }
  },
  {
    nome: "Bruno Batista",
    email: "batistuta@hotmail.com",
    senha: "@Password123",
    dataCriacao: new Date(),
    cpf: "80881506982",
    telefone: "47987654321",
    endereco: {
      rua: "Avenida Getulio Vargas",
      numero: "1200",
      bairro: "Jardim Novo Brusque",
      cep: "88350040",
      cidade: "Brusque",
      uf: "SC"
    }
  },
  {
    nome: "Cristina Cruz",
    email: "criscruz@gmail.com",
    senha: "Password123@",
    dataCriacao: new Date(),
    cpf: "20900094389",
    telefone: "99988881111",
    endereco: {
      rua: "Alameda das Laranjeiras",
      numero: "350",
      bairro: "Pomar Novo",
      cep: "65930000",
      cidade: "Açailândia",
      uf: "MA"
    }
  },
  {
    nome: "Diego Dias Corrêa",
    email: "didico@gmail.com",
    senha: "@Password@123@",
    dataCriacao: new Date(),
    cpf: "14015144643",
    telefone: "34999343499",
    endereco: {
      rua: "Rua das Esmeraldas",
      numero: "100",
      bairro: "Pedreira",
      cep: "38010050",
      cidade: "Uberaba",
      uf: "MG"
    }
  }
];

const insertCollection = db.accounts.insertMany(userAccounts);
const functionAbc = () => {
  console.log('entrou');
  // console.log(db.accounts.insertMany(userAccounts));
  return insertCollection;
}

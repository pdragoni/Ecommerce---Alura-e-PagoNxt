const mockProducts = [
  {
    "nome": "Clean Architecture",
    "descricao": "Arquitetura limpa: O guia do artesão para estrutura e design de software por Robert C. Martin (Uncle Bob)",
    "slug": "livro-clean-architecture",
    "preco": 102.9,
    "estoque": 2,
    "categoria": "LIVROS"
  },
  {
    "nome": "iPhone 13 Pro",
    "descricao": "Apple iPhone 13 Pro (256 GB) - Verde-alpino",
    "slug": "iphone-13-pro",
    "preco": 9176,
    "estoque": 6,
    "categoria": "CELULARES"
  },
  {
    "nome": "Monitor Dell 27",
    "descricao": "Monitor Dell de 27\" P2722H, Preto",
    "slug": "monitor-dell-27",
    "preco": 1889,
    "estoque": 3,
    "categoria": "INFORMÁTICA"
  },
]

const accounts = [
  {
    accountId: new ObjectId("64834f1b3014882416152533"),
    nome: "Diego Dias Corrêa",
    endereco: {
      rua: "Rua das Esmeraldas",
      numero: "100",
      bairro: "Pedreira",
      cep: "38010050",
      cidade: "Uberaba",
      uf: "MG"
    }
  },
  {
    accountId: new ObjectId("64834f1b3014882416152532"),
    nome: "Cristina Cruz",
    endereco: {
      rua: "Alameda das Laranjeiras",
      numero: "350",
      bairro: "Pomar Novo",
      cep: "65930000",
      cidade: "Açailândia",
      uf: "MA"
    }
  },
];

const pedidos = [
  {
    dataPedido: new Date(),
    account: {
      accountId: new ObjectId("64834f1b3014882416152532"),
      nome: accounts[0].nome,
    },
    enderecoEntrega: {
      rua: accounts[0].endereco.rua,
      numero: accounts[0].endereco.numero,
      bairro: accounts[0].endereco.bairro,
      cep: accounts[0].endereco.cep,
      cidade: accounts[0].endereco.cidade,
      uf: accounts[0].endereco.uf
    },
    items: [{
      productId: mockProducts[0]._id,
      quantidade: 1,
      desconto: 0.5,
      precoUnitario: mockProducts[0].preco
    }],
  },
  {
    dataPedido: new Date(),
    account: {
      accountId: accounts[1].accountId,
      nome: accounts[1].nome,
    },
    enderecoEntrega: {
      rua: accounts[1].endereco.rua,
      numero: accounts[1].endereco.numero,
      bairro: accounts[1].endereco.bairro,
      cep: accounts[1].endereco.cep,
      cidade: accounts[1].endereco.cidade,
      uf: accounts[1].endereco.uf
    },
    items: [{
      productId: mockProducts[1]._id,
      quantidade: 2,
      desconto: 0.5,
      precoUnitario: mockProducts[1].preco
    },
    {
      productId: mockProducts[2]._id,
      quantidade: 1,
      // desconto: "0.5",
      precoUnitario: mockProducts[2].preco
    }],
  }
];

use("mongo-ecomm");

db.orders.insertMany(pedidos);
const functionAbc = () => {
  console.log('entrou');
  console.log(db.accounts.insertMany(userAccounts));
}

import retrieveStatusResponse from './CategoryService.js';

const args = process.argv[2];

function processarComando(args) {
  console.log(args);
  switch (args) {
    case "--listarCategorias":
      // console.log('--listar', args)
      return retrieveStatusResponse();
    default:
      console.log("default", args);
  }
};

processarComando(args);
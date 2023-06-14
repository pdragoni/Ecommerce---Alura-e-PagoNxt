const { retrieveStatusResponse } = require("./CategoryService.js");

const arg = process.argv[2];

function processarComando(args) {
  switch (args) {
    case "--listarCategorias":
      return retrieveStatusResponse();
    default:
      console.log("default", args);
  }
}

processarComando(arg);
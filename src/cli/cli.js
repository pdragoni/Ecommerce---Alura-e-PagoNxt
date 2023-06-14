const arg = process.argv[2];

async function retrieveStatusAndData() {
  const url = "http://localhost:3000/categories";
  try {
    const response = await fetch(url);
    const { status } = response;
    const responseJson = await response.json();
    console.log("response status:", status);
    console.log(responseJson);
  }
  catch (err) {
    console.log(err);
  }
};

function processarComando(args) {
  switch (args) {
    case "--listarCategorias":
      return retrieveStatusAndData();
    default:
      console.log("default", args);
  }
}

processarComando(arg);
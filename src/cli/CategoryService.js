async function retrieveStatusResponse() {
  const url = "http://localhost:3000/categories";
  try {
    const response = await fetch(url)
    const { status } = response;
    const responseJson = await response.json();
    // console.log(responseJson)
    const resposta = `response status ${status} \n ${responseJson}`;
    // return `response status ${status} ${responseJson}`;
    console.log(resposta);
  }
  catch (err) {
    console.log(err);
  }
};

module.exports = { retrieveStatusResponse }
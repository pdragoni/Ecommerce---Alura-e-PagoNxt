async function retrieveStatusResponse() {
  const url = "http://localhost:3000/categories";
  try {
    const response = await fetch(url)
    const { status } = response;
    const responseJson = await response.json();

    // const resposta = `response status ${status} \n ${categories}`;
    // console.log(resposta);

    console.log("status response", status);
    console.log(responseJson);
  }
  catch (err) {
    console.log(err);
  }
};
// retrieveStatusResponse();

export default retrieveStatusResponse;
// src/lambda/toggleObject.js
const { API_KEY } = process.env;

exports.handler = async (event, context) => {
  const apiKey = event.queryStringParameters.apiKey;
  
  if (apiKey !== API_KEY) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Unauthorized" }),
    };
  }

  // Logique pour toggler l'objet
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Object toggled successfully." }),
  };
};

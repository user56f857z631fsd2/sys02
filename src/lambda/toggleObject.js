// src/lambda/toggleObject.js
const { parse } = require('url');
const { send } = require('micro');

exports.handler = async function(event, context) {
  const { pathname, query } = parse(event.rawUrl, true);

  if (pathname === '/api/toggleObject') {
    const apiKey = query.apiKey;

    if (apiKey && apiKey === process.env.API_KEY) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: "Object toggled successfully." }),
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ success: false, message: "Unauthorized." }),
      };
    }
  }

  return {
    statusCode: 404,
        body: JSON.stringify({ success: false, message: "Not found." }),
  };
};

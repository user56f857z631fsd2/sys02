const { createServer } = require('http');
const { parse } = require('url');
const { send } = require('micro');

const PORT = process.env.PORT || 3000;

const server = createServer(async (req, res) => {
  const { pathname, query } = parse(req.url, true);

  if (pathname === '/api/toggleObject') {
    // Extraire la clé API des paramètres de requête
    const apiKey = query.apiKey;

    // Vérifier si la clé API correspond à la variable d'environnement
    if (apiKey && apiKey === process.env.API_KEY) {
      return send(res, 200, { success: true, message: "Object toggled successfully." });
    } else {
      return send(res, 401, { success: false, message: "Unauthorized." });
    }
  }

  return send(res, 404, { success: false, message: "Not found." });
});

server.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`> Ready on http://localhost:${PORT}`);
});

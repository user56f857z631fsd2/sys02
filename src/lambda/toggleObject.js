const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/api/toggleObject', (req, res) => {
  // Simulation de la vérification de la connexion à VRChat
  // Dans un scénario réel, vous vérifieriez l'authentification et d'autres détails nécessaires
  const isConnected = true; // Simulation de la connexion réussie à VRChat

  if (isConnected) {
    // Réponse JSON si la connexion est réussie
    res.json({ message: 'Connected to VRChat successfully' });
  } else {
    // Réponse JSON si la connexion a échoué
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

exports.handler = async function(event, context) {
    // Vérifiez si l'appel à l'API est valide (par exemple, vérification d'un token ou d'une clé)
    const apiKey = event.headers['X-API-Key']; // Exemple d'authentification basée sur une clé API
    
    if (!apiKey || apiKey !== 'your-api-key') {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: 'Unauthorized' })
        };
    }

    // Si l'authentification réussit, effectuez l'action désirée (activer l'objet)
    // Dans cet exemple, retournez simplement un succès avec un message JSON
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Object toggled successfully' })
    };
};

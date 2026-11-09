// GET /api/hello?name=Ana — reto de la Parte 9: una función nueva con trigger HTTP.
const { app } = require('@azure/functions');
const { sanitizeName } = require('../lib/quiz');

app.http('hello', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'hello',
  handler: async (request, context) => {
    const name = sanitizeName(request.query.get('name')) || 'mundo';
    context.log(`Saludo para "${name}"`);
    return { jsonBody: { message: `¡Hola, ${name}! Te saluda una función serverless.` } };
  }
});

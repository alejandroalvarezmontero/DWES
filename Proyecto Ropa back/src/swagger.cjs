const swaggerJsdoc = require('swagger-jsdoc');

// Definir opciones de Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Autenticación',
      version: '1.0.0',
      description: 'API para inicio de sesión y registro de usuarios',
    },
  },
  apis: ['server.js'],
};

const specs = swaggerJsdoc(options);

// Imprimir el resultado en la consola
console.log(JSON.stringify(specs, null, 2));

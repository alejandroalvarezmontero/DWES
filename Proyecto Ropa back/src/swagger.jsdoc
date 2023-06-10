const swaggerJSDoc = require('swagger-jsdoc');
const express = require('express');

const app = express();
const port = 3000;

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Rutas de tu aplicación que contienen comentarios JSDoc con la documentación de Swagger
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Ruta para acceder a la documentación de Swagger generada
app.use('/api-docs', express.static('swagger-ui'));
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

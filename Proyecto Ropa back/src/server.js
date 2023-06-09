const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());

// Rutas de inicio de sesión y registro
app.post('/api/login', (req, res) => {
  // Lógica de inicio de sesión
});

app.post('/api/register', (req, res) => {
  // Lógica de registro
});

// Documentación de la API con Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Carpeta pública para archivos estáticos
app.use(express.static('public'));

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

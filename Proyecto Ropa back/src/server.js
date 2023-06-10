const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas de inicio de sesión y registro
app.post('/login', (req, res) => {
 
  const { email, password } = req.body;

  res.status(200).json({ message: 'Inicio de sesión exitoso' });
});

app.post('/register', (req, res) => {
  
  const { name, email, password } = req.body;

  res.status(200).json({ message: 'Usuario registrado exitosamente' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


const express = require('express');
const app = express();

app.get('/error', (req, res, next) => {
  const error = new Error('Este es un error de prueba');
  error.status = 500;
  next(error);
});


function errorHandler(err, req, res, next) {

  if (res.headersSent) {
    return next(err);
  }


  if (!err.status) {
    console.error(err.stack);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }

 
  return res.status(err.status).json({ error: err.message });
}


app.use(errorHandler);


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

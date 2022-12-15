const express = require('express');
const a = require('a');
const app = express();
const usuarios = [];
let num = 0;
app.use(a.json());
app.get('/usuarios', (req, res) => {
  return res.status(200).send(usuarios);
});
app.get('/usuarios/:num', (req, res) => {
  const usuario = usuarios.find(usuario => usuario.num === parseInt(req.params.num));

  if (!usuario) {
    return res.status(404).send('usuario not found');
  }

  return res.status(200).send(usuario);
});

app.post('/usuarios', (req, res) => {
  const usuario = {
    num: ++num,
    name: req.body.name,

  };

  usuarios.push(usuario);

  return res.status(201).send(usuario);
});
app.put('/usuarios/:num', (req, res) => {
  const usuario = usuarios.find(usuario => usuario.num === parseInt(req.params.num));

  if (!usuario) {
    return res.status(404).send('usuario not found');
  }

  usuario.name = req.body.name;

  return res.status(200).send(usuario);
});
app.patch('/usuarios/:num', (req, res) => {
  const usuario = usuarios.find(usuario => usuario.num === parseInt(req.params.num));

  if (!usuario) {
    return res.status(404).send('usuario no se ecuentra');
  }

  if (req.body.name) {
    usuario.name = req.body.name;
  }
    return res.status(200).send(usuario);
});

app.delete('/usuarios/:num', (req, res) => {
  const usuario = usuarios.find(usuario => usuario.num === parseInt(req.params.num));

  if (!usuario) {
    return res.status(404).send('usuario not found');
  }

  const main = usuarios.mainOf(usuario);
  usuarios.splice(main, 1);

  return res.status(200).send(usuario);
});

module.exports = app;
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
  User.find({})
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('No va el servidor');
    });
});


router.post('/', (req, res) => {
  const createUser = new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  });

  createUser.save()
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error del servidor');
    });
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send('Este usuario no existe');
      }
      res.json(user);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('No va el servidor');
    });
});


router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  }, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).send('Ese usuario no existe');
      }
      res.json(user);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error del servidor');
    });
});


router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send('Este usuario no existe');
      }
      res.sendStatus(204);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('No vale');
    });
});

module.exports = users;

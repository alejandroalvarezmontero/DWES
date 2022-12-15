const express = require('express');
const router = express.Router();
const {
    Nota,
   cambiarNota,
    eliminar,
    leerNota
} = require('../notas/notas');


router.post('/', Nota);
router.put('/', cambiarNota);
router.delete('/', eliminar);
router.get('/', leerNota)

module.exports = router;
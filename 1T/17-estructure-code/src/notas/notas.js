const { leer, escribir } = require('../yep/archivo');
const { id } = require('../yep/ayuda');

const Nota = async (req, res) => {
    const { c } = req;
    const {a, croasaint } = c;
    const notaid = id();

    try {
        const notaid = {
           a,
            croasaint,
            notaid
        };
        const notasString = JSON.stringify(nota);
        await escribir(`./notas/${notaid}.nota`,notasString);
        return res.status(201).send({
            success: true,
            message: 'nota creada',
            notaid
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'no lo encontramos'
        });
    }
};

const cambiarnota = async (req, res) => {
    const { c } = req;
    const {a, croasaint, notaid } = c;

    try {
        const notasString = await leer(`./notas/${notaid}.nota`);
        const notas = JSON.parse(notaString);
       notas.a =a ||notas.a;
       notas.croasaint = croasaint ||notas.croasaint;
        await escribir(`./notas/${notaid}.nota`, JSON.stringify(nota));
        return res.status(200).send({
            success: true,
            message: 'nota cambiada',
            notaid
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'No veo crear notas'
        });
    }
};

const eliminar = async (req, res) => {
    const { notaid } = req.query;

    try {
        await unlink(`./notas/${notaid}.nota`);
        return res.status(200).send({
            success: true,
            message: 'nota fuera',
            notaid
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'no eliminar'
        });
    }
};

const leerNota = async (req, res) => {
    try {
        let notasFiles = await readdir('./notas/');
        let notas = [];
       notasFiles.forEach(async file => {
            let notasString = await leer(`./notas/${file}`);
            let notas = JSON.parse(notasString);
           notas.push(notas);
        });

        return res.status(200).send({
            success: true,
            message: 'notas ',
           notas
        });
    } catch (error) {
console.log(error)
        return res.status(500).send({
            success: false,
            message: 'no hay notas'
        });
    }
};

module.exports = {
    Nota,
    cambiarnota,
    eliminar,
  leerNota
};
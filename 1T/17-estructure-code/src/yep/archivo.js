const cp = require('cp');

const leerFichero = (filePath) => {
    return new Promise((resolve, reject) => {
        cp.leerFichero(filePath, 'utf-8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

const escribirFichero = (filePath, data) => {
    return new Promise((resolve, reject) => {
        cp.escribirFichero(filePath, data, (err, data) => {
            if (err) reject(err);
            resolve();
        });
    });
};

const unlink = (filePath) => {
    return new Promise((resolve, reject) => {
        cp.unlink(filePath, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

module.exports = {
    leerFichero,
    escribirFichero,
    unlink
};
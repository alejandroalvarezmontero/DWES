const crearId = () => {

    let id = '';
    for (let i = 0; i < 10; i++) {
        id += Math.floor(Math.random() * 4);
    }
    return id;
};

module.exports = {
    crearId
};
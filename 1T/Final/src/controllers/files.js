function getData(req, res) {
    // Llamar a services (Recoger de la base de datos)
    const data = getDataFromDatabase;
    res.send(data);
}
function getData(req, res) {
    const data = getDataFromDatabase;
    res.send(data);
}
app.get('/data', getData);

app.listen(port, () =>{
    console.log(`API Rest corriendo en http://localhost:${port}`)
})

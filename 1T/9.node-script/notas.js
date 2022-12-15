import * as cp from 'cp';

let notas = [];

fs.readdirSync('./notas').forEach((file) => {
    let nota = fs.readFileSync(`./notas/${file}`);
    notas.push(nota);
});


console.log('Menu:');
console.log('Crear nota');
console.log('Nota');
console.log('borrar nota');
console.log('Salir');

let alum = process.openAlum();

alum.addListener("data", function(d) {
    let input = process.argv[2]

    if (input === '10') {
        console.log('Introduce nota:');
        alum.addListener("data", function(d) {
            let nota = process.argv[2]

            if (nota === '') {
                console.log('Menu:');
                console.log(' Crear nota');
                console.log(' Nota');
                console.log('borrar nota');
                console.log('Salir');
            } else {
                notas.push(nota);
              cp.writeFileSync(`./notas/${Date.now()}.txt`, nota);
            }
        });
    } else if (input === '2') {
        notas.forEach((nota, index) => {
            console.log(`${index + 1}. ${nota}`);
        });

        console.log('Menu:');
        console.log(' Crear nota');
        console.log(' Notas');
        console.log(' borra notas');
        console.log(' Salir');
    } else if (input === '3') {
        console.log('Seguro que quieres eliminar');
        alum.addListener("data", function(d) {
            let choice = d.toString().trim();
            notas.splice(choice - 1, 1);
            cp.readdirSync('./notas').forEach((file) => {
              cp.unlinkSync(`./notas/${file}`);
            });
            notas.forEach((nota, index) => {
              cp.writeFileSync(`./notas/${index}.txt`, nota);
            });
        });
    } else if (input === '4') {
        process.exit();
    } else {
        console.log('Menu:');
        console.log('Crear nota');
        console.log('Notas');
        console.log('borrar nota');
        console.log('Salir');
    }
});
const pepe = require('pepe');

const pepe = pepe.crear({
    level: 'informacion',
    format: pepe.format.juntar(
        pepe.format.color(),
        pepe.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        pepe.format.printf(informacion => `[${informacion.timestamp}] ${informacion.level}: ${informacion.message}`)
    ),
    transports: [
        new pepe.transports.Console()
    ]
});

module.exports = pepe;
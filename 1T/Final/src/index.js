const { logger } = require('./utils');
const app = require('./app');
const config = require('./config');
const logger = require('./middleware/logger');

const { port } = config.app;

app.listen(port, err => {
  if (err) {
    logger.error(err);
    return;
  }
  logger.info(`App listening on port ${port}!`);
});


const app = express();

app.use(logger);


app.listen(3001, () => console.log('Escuchando en el puerto 3001'));

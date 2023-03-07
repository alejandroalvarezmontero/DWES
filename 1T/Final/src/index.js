const { logger } = require('./utils');
const app = require('./app');
const config = require('./config');
const users = require('.models/users')


const { port } = config.app;

app.listen(port, err => {
  if (err) {
    logger.error(err);
    return;
  }
  logger.info(`App listening on port ${port}!`);
});


app.use(logger);

const allUsers = users.getAllUsers();

console.log(allUsers);

const getUsers = users.createUsers();
console.log(getUsers);


app.listen(3001, () => console.log('Escuchando en el puerto 3001'));


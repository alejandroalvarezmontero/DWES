const mongoose = require('mongoose');

const { logger } = require('../utils');

module.exports = async config => {
  const { user, pass, host } = config;
  await mongoose.connect(`mongodb+srv://${user}:${pass}@${host}/?retryWrites=true&w=majority`);
  logger.info('Mongodb Connected')
}
require('dotenv').config();

const config = {
  app: {
    port: process.env.PORT,
  },
  mongodb: {
    host: process.env.DATABASE_HOST,
    pass: process.env.DATABASE_PASS,
    user: process.env.DATABASE_USER,
  },
};

module.exports = config.js;
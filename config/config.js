require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    host: process.env.HOST,
    dialect: process.env.DIALECT
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE + '_test',
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: process.env.DIALECT
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE + '_prod',
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: process.env.DIALECT
  }
};

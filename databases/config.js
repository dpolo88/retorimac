const yenv = require('yenv')
const env = process.env.NODE_ENV || 'development'
const configdb = yenv('.env.yml', { env })

module.exports = {
  development: {
    username: configdb.DB_USER,
    password: configdb.DB_PASSWORD,
    database: configdb.DB_DATABASE,
    host: configdb.DB_HOST,
    dialect: "mysql"
  },
  test: {
    username: configdb.DB_USER,
    password: configdb.DB_PASSWORD,
    database: configdb.DB_DATABASE,
    host: configdb.DB_HOST,
    dialect: "mysql"
  },
  production: {
    username: configdb.DB_USER,
    password: configdb.DB_PASSWORD,
    database: configdb.DB_DATABASE,
    host: configdb.DB_HOST,
    dialect: "mysql"
  }
}
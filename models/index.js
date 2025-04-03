const yenv = require('yenv')
const env = process.env.NODE_ENV || 'development'
const configdb = yenv('.env.yml', { env })

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    configdb.DB_NAME,
    configdb.DB_USER,
    configdb.DB_PASSWORD,
    {
      dialect: "mysql",
      host: configdb.DB_HOST,
      port: configdb.DB_PORT
    }
  )

const modelDefiners = [
    require('./Film')
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize, DataTypes);
}

module.exports = sequelize;
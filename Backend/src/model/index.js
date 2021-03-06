const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../ddbb/ddbb.config');

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
);

sequelize.authenticate()
  .then(() => console.log('connected...'))
  .catch((err) => {
    console.log(`Error${err}`);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employees = require('./employeeModel')(sequelize, DataTypes);
db.vehicle = require('./vehicleModel')(sequelize, DataTypes);
db.reservation = require('./reservationModel')(sequelize, DataTypes);
db.sales = require('./salesModel')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
  .then(() => {
    console.log('re-sync done!');
  });

module.exports = db;

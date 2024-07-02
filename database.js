const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('school_management_system', 'nikitha', 'nikitha', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false // Disable logging for cleaner output
});

module.exports = sequelize;

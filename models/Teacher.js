const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Teacher = sequelize.define('Teacher', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  subject: {
    type: DataTypes.STRING(50)
  }
});

module.exports = Teacher;

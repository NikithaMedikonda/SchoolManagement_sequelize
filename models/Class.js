const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../database');

const Class = sequelize.define('Class', {
  classRoom: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  className: {
    type: DataTypes.ENUM('LKG', 'UKG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'),
    allowNull: false
  },
  teacherID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Teachers',
      key: 'id'
    }
  }
});

module.exports = Class;

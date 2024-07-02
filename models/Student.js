
const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Class = require('./class');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(100)
  },
  classId: {
    type: DataTypes.INTEGER,
    references: {
      model: Class,
      key: 'classRoom'
    }
  },
  enrollmentDate: {
    type: DataTypes.DATE
  },
  gender: {
    type: DataTypes.STRING(10)
  }
});

module.exports = Student;

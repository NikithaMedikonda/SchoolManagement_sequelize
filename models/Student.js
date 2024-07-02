const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(100)
  },
  classID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Class',
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

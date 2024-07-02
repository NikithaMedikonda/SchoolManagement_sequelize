const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Student = require('./student');

const Fee = sequelize.define('Fee', {
  feeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  studentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Student,
      key: 'id'
    }
  },
  feeName: {
    type: DataTypes.ENUM('Tuition', 'Uniform', 'Term', 'Fine', 'Books')
  },
  amount: {
    type: DataTypes.INTEGER
  },
  dueDate: {
    type: DataTypes.DATE
  },
  paymentStatus: {
    type: DataTypes.ENUM('Paid', 'Unpaid', 'Partial')
  }
});

module.exports = Fee;

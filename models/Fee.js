const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../database');

const Fee = sequelize.define('Fee', {
  feeID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  studentID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Student',
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

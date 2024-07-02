const sequelize = require('../database');
const Teacher = require('./teacher');
const Class = require('./class');
const Student = require('./student');
const Fee = require('./fee');

module.exports = {
  sequelize,
  Teacher,
  Class,
  Student,
  Fee
};


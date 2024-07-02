
const sequelize = require('../database');
const Class = require('./Class');
const Teacher = require('./Teacher');
const Student = require('./Student');
const Fee = require('./Fee');

// Define associations
Class.belongsTo(Teacher, { foreignKey: 'teacherID' });
Teacher.hasMany(Class, { foreignKey: 'teacherID' });

Student.belongsTo(Class, { foreignKey: 'classID' });
Class.hasMany(Student, { foreignKey: 'classID' });

Fee.belongsTo(Student, { foreignKey: 'studentID' });
Student.hasMany(Fee, { foreignKey: 'studentID' });

module.exports = {
  Class,
  Teacher,
  Student,
  Fee,
  sequelize
};


const { sequelize, Teacher, Class, Student, Fee } = require('./models');

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync({ force: true });
    console.log('Database synchronized successfully.');

    await Teacher.bulkCreate([
      { name: 'Usha', subject: 'Mathematics' },
      { name: 'Nikitha', subject: 'Chemistry' },
      { name: 'Mamatha', subject: 'Physics' }
    ]);

    await Class.bulkCreate([
      { className: 'Grade 9', teacherId: 1 },
      { className: 'Grade 8', teacherId: 2 },
      { className: 'Grade 7', teacherId: 3 }
    ]);

    await Student.bulkCreate([
      { name: 'Anoosha', dob: '2003-04-23', address: 'Warangal', classId: 1, enrollmentDate: '2005-08-01', gender: 'Female' },
      { name: 'Sahitha', dob: '2003-08-23', address: 'Hyderabad', classId: 2, enrollmentDate: '2005-08-01', gender: 'Female' },
      { name: 'Chinni', dob: '2003-08-23', address: 'Hyderabad', classId: 3, enrollmentDate: '2005-08-01', gender: 'Female' }
    ]);

    await Fee.bulkCreate([
      { studentId: 1, feeName: 'Tuition', amount: 500, dueDate: '2023-09-01', paymentStatus: 'Paid' },
      { studentId: 2, feeName: 'Books', amount: 50, dueDate: '2023-09-01', paymentStatus: 'Unpaid' },
      { studentId: 3, feeName: 'Tuition', amount: 500, dueDate: '2023-09-01', paymentStatus: 'Paid' }
    ]);

    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Unable to connect to the database or insert data:', error);
  } finally {
    await sequelize.close();
    console.log('Connection closed.');
  }
}

main();

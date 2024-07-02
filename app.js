const { Teacher, Class, Student, Fee, sequelize } = require('./models');

async function insertTeachers() {
  await Teacher.bulkCreate([
    { name: 'Usha', subject: 'Mathematics' },
    { name: 'Nikitha', subject: 'Chemistry' },
    { name: 'Mamatha', subject: 'Physics' }
  ]);
  console.log('Teachers created successfully.');
}

// async function insertClasses() {
//   await Class.bulkCreate([
//     { className: 'Grade 9', teacherID: 1 },
//     { className: 'Grade 8', teacherID: 2 },
//     { className: 'Grade 7', teacherID: 3 }
//   ]);
//   console.log('Classes created successfully.');
// }

// async function insertStudents() {
//   await Student.bulkCreate([
//     { name: 'Anoosha', dob: '2003-04-23', address: 'Warangal', classID: 1, enrollmentDate: '2005-08-01', gender: 'Female' },
//     { name: 'Sahitha', dob: '2003-08-23', address: 'Hyderabad', classID: 2, enrollmentDate: '2005-08-01', gender: 'Female' },
//     { name: 'Chinni', dob: '2003-08-23', address: 'Hyderabad', classID: 3, enrollmentDate: '2005-08-01', gender: 'Female' }
//   ]);
//   console.log('Students created successfully.');
// }

// async function insertFees() {
//   await Fee.bulkCreate([
//     { studentID: 1, feeName: 'Tuition', amount: 500, dueDate: '2023-09-01', paymentStatus: 'Paid' },
//     { studentID: 2, feeName: 'Books', amount: 50, dueDate: '2023-09-01', paymentStatus: 'Unpaid' },
//     { studentID: 3, feeName: 'Tuition', amount: 500, dueDate: '2023-09-01', paymentStatus: 'Paid' }
//   ]);
//   console.log('Fees created successfully.');
// }

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync({ force: true });
    console.log('Database synchronized successfully.');

    await insertTeachers();
    // await insertClasses();
    // await insertStudents();
    // await insertFees();

    console.log('All data has been inserted successfully.');
  } catch (error) {
    console.error('Unable to connect to the database or insert data:', error);
  } finally {
    await sequelize.close();
    console.log('Connection closed.');
  }
}

main();

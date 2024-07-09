const Student = require('../models/student.model');

const registerStudent = async (studentData, id) => {
  studentData.userId = Object(id)

  const student = new Student(studentData);
  await student.save();
  return student;
};

module.exports = { registerStudent };
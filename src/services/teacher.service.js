const Teacher = require('../models/teacher.model');

const registerTeacher = async (teacherData, id) => {
  teacherData.userId = Object(id)

  const teacher = new Teacher(teacherData);
  await teacher.save();
  return teacher;
};

module.exports = { registerTeacher };
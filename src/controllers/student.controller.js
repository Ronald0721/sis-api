const { registerStudent, getAll } = require('../services/student.service');

const getAllController = async (req, res) => {
  try {
    const students = await getAll()
    res.status(201).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get all students', error: error.message });
  }
}

const registerStudentController = async (req, res) => {
  try {
    const student = await registerStudent(req.body, req.user.id);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Failed to register student', error: error.message });
  }
};


module.exports = { registerStudentController, getAllController };
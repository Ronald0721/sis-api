const { registerTeacher } = require('../services/teacher.service');

const createTeacherController = async (req, res) => {
  try {
    const teacher = await registerTeacher(req.body, req.user.id);
    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Failed to register teacher', error: error.message });
  }
};

module.exports = { createTeacherController };
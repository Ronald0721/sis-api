const { Router } = require("express");
const router = Router();

const { createTeacherController } = require('../controllers/teacher.controller');
const { authenticateToken } = require('../middleware/auth')
const { validateSchema } = require('../middleware/validation.middleware');
const { TeacherSchema } = require('../validation/validation');

router.route('/').all(authenticateToken).post(validateSchema(TeacherSchema), createTeacherController )

module.exports = router;
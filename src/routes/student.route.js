const { Router } = require("express");
const router = Router();

const { registerStudentController } = require('../controllers/student.controller');
const { authenticateToken } = require('../middleware/auth')
const { validateSchema } = require('../middleware/validation.middleware');
const { StudentSchema } = require('../validation/validation');

router.route('/').all(authenticateToken).post(validateSchema(StudentSchema), registerStudentController )

module.exports = router;
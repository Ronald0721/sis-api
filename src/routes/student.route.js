const { Router } = require("express");
const router = Router();

const { registerStudentController, getAllController } = require('../controllers/student.controller');
const { authenticateToken } = require('../middleware/auth')
const { validateSchema } = require('../middleware/validation.middleware');
const { StudentSchema } = require('../validation/validation');

router.route('/').all(authenticateToken).post(validateSchema(StudentSchema), registerStudentController ).get(getAllController)

module.exports = router;
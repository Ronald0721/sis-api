const { Router } = require("express");
const router = Router();

const { registerUserController, loginUserController } = require('../controllers/user.controller');
const { validateSchema } = require('../middleware/validation.middleware');
const { UserSchema } = require('../validation/validation');

router.route('/').post(validateSchema(UserSchema), registerUserController )

router.post('/login', loginUserController)

module.exports = router;
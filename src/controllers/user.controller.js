const { registerUser, loginUser  } = require('../services/user.service');
const { generateToken } = require('../services/token.service');

const registerUserController = async (req, res) => {
    try {
        const newUser = await registerUser(req.body);
        const token = generateToken(newUser);
        res.status(201).json({ user: newUser, token });
    } catch (error) {
        res.status(500).json({ message: 'Failed to save user', error: error.message });
    }
}

const loginUserController = async (req, res) => {
    try {
        const user = await loginUser(req.body);
        const token = generateToken(user);
        res.status(201).json({user: user, token})
    } catch (error) {
        res.status(500).json({ message: 'Failed login user', error: error.message });
    }
}

module.exports = { registerUserController, loginUserController }
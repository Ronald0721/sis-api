const User = require('../models/user.model');

const registerUser = async (userData) => {
    const newUser = new User(userData)
    await newUser.save();

    return newUser;
}

module.exports = { registerUser }
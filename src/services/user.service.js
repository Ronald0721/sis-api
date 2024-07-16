const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

const registerUser = async (userData) => {
    const newUser = new User(userData)
    await newUser.save();

    return newUser;
}

const loginUser = async (userData) => {
    const foundUser = await User.findOne({username: userData.username})
    if (foundUser) {
        const isPasswordCorrect = await bcrypt.compare(userData.password, foundUser.password);

        if(isPasswordCorrect){
            return {username: foundUser.username, role: foundUser.role};
        } else {
            return false;
        }
    } else {
        throw Error("User doesn't exist")
    }
}

module.exports = { registerUser, loginUser }
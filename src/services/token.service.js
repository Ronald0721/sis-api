const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const data = {
        id: user._id,
        username: user.username,
        role: user.role
    };

  return jwt.sign(data, process.env.JWT_SECRET, {});
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateToken, verifyToken };

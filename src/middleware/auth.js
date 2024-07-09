// src/middleware/auth.middleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { verifyToken } = require('../services/token.service');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    const decodedToken = verifyToken(token);
    const user = await User.findById(decodedToken.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    req.user = {id: user.id, role: user.role};
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token', error: error.message });
  }
};

module.exports = { authenticateToken };

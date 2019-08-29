const express = require('express');
const User = require('../models/User');
const errorHandler = require('../util/errorHandler');

const router = express.Router();

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    err.statusCode = 500;
    return errorHandler(err, getUsers.name, res);
  }
};

router.get('/api/users', getUsers);

module.exports = router;

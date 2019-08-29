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

const addUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const newUser = new User({
      firstName,
      lastName,
      email
    });
    const user = await newUser.save();
    return res.json(user);
  } catch (err) {
    err.statusCode = 500;
    return errorHandler(err, addUser.name, res);
  }
};

router.get('/api/users', getUsers);
router.post('/api/users', addUser);

module.exports = router;

const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;

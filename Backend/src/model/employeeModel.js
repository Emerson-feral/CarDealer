const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  name: String,
  email: String,
  CPF: Number,
  value: Number,
  bio: String

});

module.exports = mongoose.model('Employee', employeeSchema);

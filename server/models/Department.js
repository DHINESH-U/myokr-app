// server/models/Department.js
const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: String,
  organisation: { type: mongoose.Schema.Types.ObjectId, ref: 'Organisation' },
});

module.exports = mongoose.model('Department', departmentSchema);

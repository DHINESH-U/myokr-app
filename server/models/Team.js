// server/models/Team.js
const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String,
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
});

module.exports = mongoose.model('Team', teamSchema);

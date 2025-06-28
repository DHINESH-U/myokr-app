// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'manager', 'user'], default: 'user' },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' } // ✅ added
});

module.exports = mongoose.model('User', userSchema);

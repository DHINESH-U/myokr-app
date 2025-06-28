const mongoose = require('mongoose');

const okrSchema = new mongoose.Schema({
  title: String,
  description: String,
  progress: { type: Number, default: 0 },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('OKR', okrSchema);

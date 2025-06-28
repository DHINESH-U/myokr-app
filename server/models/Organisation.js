// server/models/Organisation.js
const mongoose = require('mongoose');

const organisationSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Organisation', organisationSchema);

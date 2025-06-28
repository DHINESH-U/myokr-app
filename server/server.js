// // server/server.js (example)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const teamRoutes = require('./routes/teams'); // 🆕

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);      // ✅ Handles /api/register, /api/login
app.use('/api/teams', teamRoutes); // ✅ Handles GET /api/teams

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
  app.listen(5000, () => console.log("Server running on port 5000"));
}).catch((err) => console.error(err));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const teamRoutes = require('./routes/teams');
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch((err) => console.log(err));
const okrRoutes = require('./routes/okr');
const orgRoutes = require('./routes/orgRoutes');
const deptRoutes = require('./routes/departmentRoutes');
const teamRoutes = require('./routes/teamRoutes');

app.use('/api/orgs', orgRoutes);
app.use('/api/departments', deptRoutes);
app.use('/api/teams', teamRoutes);

app.use('/api/okrs', okrRoutes);

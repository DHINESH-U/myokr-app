// // server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('MyOKR API is running'));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/orgs', require('./routes/orgRoutes'));
app.use('/api/departments', require('./routes/departmentRoutes'));
app.use('/api/teams', require('./routes/teamRoutes'));
app.use('/api/okrs', require('./routes/okr'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch((err) => console.log(err));

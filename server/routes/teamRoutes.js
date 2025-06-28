const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

router.post('/', async (req, res) => {
  try {
    const team = new Team({ name: req.body.name, department: req.body.department });
    await team.save();
    res.json(team);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get('/', async (req, res) => {
  const teams = await Team.find().populate('department');
  res.json(teams);
});

module.exports = router;

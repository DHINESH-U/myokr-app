const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

router.post('/', async (req, res) => {
  try {
    const dept = new Department({ name: req.body.name, organisation: req.body.organisation });
    await dept.save();
    res.json(dept);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get('/', async (req, res) => {
  const depts = await Department.find().populate('organisation');
  res.json(depts);
});

module.exports = router;

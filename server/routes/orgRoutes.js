const express = require('express');
const router = express.Router();
const Organisation = require('../models/Organisation');

router.post('/', async (req, res) => {
  try {
    const org = new Organisation({ name: req.body.name });
    await org.save();
    res.json(org);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get('/', async (req, res) => {
  const orgs = await Organisation.find();
  res.json(orgs);
});

module.exports = router;

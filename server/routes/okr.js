const express = require('express');const router = express.Router();
const OKR = require('../models/OKR');

// Get all OKRs
router.get('/', async (req, res) => {
  const okrs = await OKR.find().populate('owner', 'name');
  res.json(okrs);
});

// Create new OKR
router.post('/', async (req, res) => {
  const newOKR = new OKR(req.body);
  await newOKR.save();
  res.json({ msg: 'OKR created', okr: newOKR });
});

// Update OKR
router.put('/:id', async (req, res) => {
  const updated = await OKR.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ msg: 'OKR updated', okr: updated });
});

// Delete OKR
router.delete('/:id', async (req, res) => {
  await OKR.findByIdAndDelete(req.params.id);
  res.json({ msg: 'OKR deleted' });
});

module.exports = router;

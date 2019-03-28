const express = require('express');
const router = express.Router();
const Entry = require('../model');
const validate = require('../helpers/validate');

// ========== CRUD OPERATIONS ========== //

// Get all entries //

router.get('/', async (req, res) => {
  const entries = await Entry.find().sort('firstName');
  res.send(entries);
});

// Get a single entry //

router.get('/:id', async (req, res) => {
  const entry = await Entry.findById(req.params.id);
  if (!entry) return res.status(404).send('Entry not found');
  res.send(entry);
});

// Create a new entry //

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let entry = new Entry({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
  });
  entry = await entry.save();
  res.send(entry);
});

// Update an entry //

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const entry = await Entry.findByIdAndUpdate(
    req.params.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
    },
    {
      new: true,
    }
  );

  if (!entry) return res.status(404).send('Entry not found');
  res.send(entry);
});

// Delete an entry (just in case the client realizes it can be usefull) //

router.delete('/:id', async (req, res) => {
  const entry = await Entry.findByIdAndRemove(req.params.id);
  if (!entry) return res.status(404).send('Entry not found');
  res.send(entry);
});

module.exports = router;

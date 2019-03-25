const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({
  extended: true,
});

app.use(urlencodedParser);
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const entries = [
  { id: 1, firstName: 'John', lastName: 'Doe', phone: '+39 02 1234567' },
  { id: 2, firstName: 'Foo', lastName: 'Bar', phone: '+39 02 3456789' },
];

app.get('/', (req, res) => res.send('Hello World with Express'));

// ========== CRUD OPERATIONS ========== //
const schema = {
  firstName: Joi.string()
    .min(2)
    .required(),
  lastName: Joi.string()
    .min(2)
    .required(),
  phone: Joi.string()
    .min(14)
    .required(),
};
// Get all entries //
app.get('/api/entries', (req, res) => {
  res.send(entries);
});
// Get a single entry //
app.get('/api/entry/:id', (req, res) => {
  const entry = entries.find(entry => entry.id === parseInt(req.params.id));
  if (!entry) res.status(404).send('Entry not found');
  res.send(entry);
});
// Create a new entry //
app.post('/api/entries', (req, res) => {
  const valid = Joi.validate(req.body, schema);
  if (valid.error) {
    res.status(400).send(valid.error.details[0].message);
    return;
  }
  const entry = {
    id: entries.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
  };
  entries.push(entry);
  res.send(entry);
});
// Update an entry //
app.put('/api/entry/:id', (req, res) => {
  const entry = entries.find(entry => entry.id === parseInt(req.params.id));
  if (!entry) res.status(404).send('Entry not found');

  const valid = Joi.validate(req.body, schema);
  if (valid.error) {
    res.status(400).send(valid.error.details[0].message);
    return;
  }

  entry.firstName = req.body.firstName;
  entry.lastName = req.body.lastName;
  entry.phone = req.body.phone;

  res.send(entry);
});
// Delete an entry //
app.delete('/api/entry/:id', (req, res) => {
  const entry = entries.find(entry => entry.id === parseInt(req.params.id));
  if (!entry) res.status(404).send('Entry not found');
  const index = entries.indexOf(entry);
  entries.splice(index, 1);
  res.send(entry);
});

app.listen(port, () => {
  console.log(`Running phonebook on port ${port} `);
});

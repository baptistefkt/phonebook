const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const entries = require('./routes/entries');

const app = express();

mongoose
  .connect('mongodb://localhost/phonebook', {
    useNewUrlParser: true,
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB', err));

const urlencodedParser = bodyParser.urlencoded({
  extended: true,
});

app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(cors());
app.use('/api/entries', entries);

const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, () => {
  console.log(`Running PhoneBook on port ${port} `);
});

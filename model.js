const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    phone: String,
  },
  {
    timestamps: true,
  }
);

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;

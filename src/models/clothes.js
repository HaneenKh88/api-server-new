'use strict';
const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
  name: { type: String, required: true },
 
});
const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;
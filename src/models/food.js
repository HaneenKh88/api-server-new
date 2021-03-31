'use strict';
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
 
});

const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;
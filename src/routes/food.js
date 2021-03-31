'use strict';
const express = require('express');
const validator = require('../middleware/validator');
const Food = require('../models/food');
const food = new Food();
const router = express.Router();

router.get('/', getfood);
router.get('/:id', validator, getfoodById);
router.post('/', createfood);
router.put('/:id', validator, updatefood);
router.delete('/:id', validator, deletefood);
// these are the Controller functions can be moved to /controllers/person.js
function getfood(req, res) {
  const resObj = food.read();
  res.json(resObj);
}

function getfoodById(req, res) {
  const resObj = food.read(req.params.id);
  res.json(resObj);
}

function createfood(req, res) {
  const personObject = req.body;
  const resObj = food.create(personObject);
  res.status(201).json(resObj);
}

function updatefood(req, res) {
  const personObject = req.body;
  const resObj = food.update(req.params.id, personObject);
  res.json(resObj);
}

function deletefood(req, res) {
  const resObj = food.delete(req.params.id);
  res.json(resObj);
}

module.exports = router;
'use strict';
const express = require('express');
const validator = require('../middleware/validator');
const Cloth = require('../models/clothes');
const cloth = new Cloth();
const router = express.Router();


router.get('/', getclothes);
router.get('/:id', validator, getclothesById);
router.post('/', createclotes);
router.put('/:id', validator, updateclothes);
router.delete('/:id', validator, deleteclothes);
// these are the Controller functions can be moved to /controllers/person.js
function getclothes(req, res) {
  const resObj = cloth.read();
  res.json(resObj);
}

function getclothesById(req, res) {
  const resObj = cloth.read(req.params.id);
  res.json(resObj);
}

function createclotes(req, res) {
  const clothesObject = req.body;
  const resObj = cloth.create(clothesObject);
  res.status(201).json(resObj);
}

function updateclothes(req, res) {
  const clothesObject = req.body;
  const resObj = cloth.update(req.params.id, clothesObject);
  res.json(resObj);
}

function deleteclothes(req, res) {
  const resObj = cloth.delete(req.params.id);
  res.json(resObj);
}

module.exports = router;
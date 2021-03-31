'use strict';
const express = require('express');
const validator = require('../middleware/validator');
const clothmod = require('../models/clothes');
const Cloth = require('../models/data-collection-class.js');
const cloth = new Cloth(clothmod);
const router = express.Router();


router.get('/', getclothes);
router.get('/:id', validator, getclothesById);
router.post('/', createclotes);
router.put('/:id', validator, updateclothes);
router.delete('/:id', validator, deleteclothes);

// these are the Controller functions can be moved to /controllers/person.js
async function getclothes(req, res, next) {
  try {
    const resObj = await cloth.read();
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

function getclothesById(req, res, next) {
  cloth
      .read(req.params.id)
    .then((responseData) => {
      res.json(responseData[0]);
    })
    .catch((error) => {
      next(error);
    });
}

async function createclotes(req, res) {
  const clothObject = req.body;
  try {
    const resObj = await cloth.create(clothObject);
    res.status(201).json(resObj);
  } catch (error) {
    throw new Error(error.message);
  }
}

async function updateclothes(req, res, next) {
  const clothObject = req.body;
  try {
    const resObj = await cloth.update(req.params.id, clothObject);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function deleteclothes(req, res, next) {
  try {
    const resObj = await cloth.delete(req.params.id);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
'use strict';
const express = require('express');
const validator = require('../middleware/validator');
const foodMod = require('../models/food');
const Food = require('../models/data-collection-class.js');
const food = new Food(foodMod);
const router = express.Router();

router.get('/', getfood);
router.get('/:id', validator, getfoodById);
router.post('/', createfood);
router.put('/:id', validator, updatefood);
router.delete('/:id', validator, deletefood);
// these are the Controller functions can be moved to /controllers/person.js
async function getfood(req, res, next) {
  try {
    const resObj = await food.read();
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

function getfoodById(req, res, next) {
  food
      .read(req.params.id)
    .then((responseData) => {
      res.json(responseData[0]);
    })
    .catch((error) => {
      next(error);
    });
}

async function createfood(req, res) {
  const foodObject = req.body;
  try {
    const resObj = await food.create(foodObject);
    res.status(201).json(resObj);
  } catch (error) {
    throw new Error(error.message);
  }
}

async function updatefood(req, res, next) {
  const foodObject = req.body;
  try {
    const resObj = await food.update(req.params.id, foodObject);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function deletefood(req, res, next) {
  try {
    const resObj = await food.delete(req.params.id);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
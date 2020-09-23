'use strict';

const products = require('../models/products');
const categories = require('../models/categories');
const todos = require('../models/todos');

function getModel(req, res, next) {
  const modelMap = {
    products: products,
    categories: categories,
    todos: todos,
  };

  const model = modelMap[req.params.model];

  if (model) {
    req.model = model;

    next();
  } else {
    next('Invalid Model');
  }
}

module.exports = getModel;

const { nameFieldMiddleware } = require('./nameFieldMiddleware');
const { productIdNotFound } = require('./productIdNotFound');
const { saleNotFound } = require('./saleNotFound');
const { quantityIncorrect } = require('./quantityIncorrect');

module.exports = {
  nameFieldMiddleware,
  productIdNotFound,
  saleNotFound,
  quantityIncorrect,
};
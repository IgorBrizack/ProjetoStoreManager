const express = require('express');

const salesController = require('../controllers/sales.controller');
const { saleNotFound, productIdNotFound,
  quantityIncorrect } = require('../middlewares');

const router = express.Router();

router.post('/', salesController.insertSalesController);

router.get('/', salesController.getAllSales);

router.get('/:id', salesController.getSaleById);

router.delete('/:id', salesController.deleteProductById);

router.put('/:id',
  productIdNotFound,
  quantityIncorrect,
  saleNotFound,
  salesController.attSaleById);

module.exports = router;
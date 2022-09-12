const express = require('express');

const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.post('/', salesController.insertSalesController);

router.get('/', salesController.getAllSales);

router.get('/:id', salesController.getSaleById);

router.delete('/:id', salesController.deleteProductById);

module.exports = router;
const express = require('express');

const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.post('/', salesController.insertSalesController);

router.get('/', salesController.getAllSales);

module.exports = router;
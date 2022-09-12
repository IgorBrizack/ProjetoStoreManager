const express = require('express');

const productsController = require('../controllers/products.controller');

const router = express.Router();

const { nameFieldMiddleware } = require('../middlewares');

router.get('/', productsController.allProducts);

router.get('/:id', productsController.productById);

router.post('/', productsController.insertProduct);

router.put('/:id',
  nameFieldMiddleware,
  productsController.atualizeProduct);

router.delete('/:id', productsController.deleteProductById);

module.exports = router;
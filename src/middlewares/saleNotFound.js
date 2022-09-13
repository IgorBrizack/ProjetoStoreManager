const salesModel = require('../models/sales.model');

const saleNotFound = async (req, res, next) => {
  const { id } = req.params;
  const product = await salesModel.getSaleByIdModel(id);
  if (product.length !== 0) return next();
  return res.status(404).json({ message: 'Sale not found' });
};

module.exports = {
  saleNotFound,
};
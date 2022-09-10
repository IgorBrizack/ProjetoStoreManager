const { productsService } = require('../services');
const errorMap = require('../utils/errorMap');

const allProducts = async (_req, res) => {
  const { type, message } = await productsService.getProducts();
  if (type) return res.status(errorMap.mapError(type)).json(message);
  res.status(200).json(message);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

module.exports = {
  allProducts,
  productById,
};
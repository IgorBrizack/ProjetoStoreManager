const { productsService } = require('../services');
const errorMap = require('../utils/errorMap');

const allProducts = async (_req, res) => {
  const { message } = await productsService.getProducts();
  res.status(200).json(message);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const insertProduct = async (req, res) => {
  const { body } = req;
  const { type, message } = await productsService.insertNewProduct(body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const atualizeProduct = async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  const { type, message } = await productsService.insertAtualizedProduct(id, body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.deleteProduct(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(204).json(message);
};

const searchTerm = async (req, res) => {
  const { q } = req.query;
  const { message } = await productsService.searchByTerm(q);

  res.status(200).json(message);
};

module.exports = {
  allProducts,
  productById,
  insertProduct,
  atualizeProduct,
  deleteProductById,
  searchTerm,
};
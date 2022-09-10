const { productsModel } = require('../models');

const getProducts = async () => {
  const result = await productsModel.findAllProducts();
  return { type: null, message: result };
};

// pegar um produto pelo id
const getProductById = async (id) => {
  const product = await productsModel.findById(id);
  console.log(product);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

module.exports = { 
  getProducts,
  getProductById,
};
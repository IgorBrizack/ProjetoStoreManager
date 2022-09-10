const { productsModel } = require('../models');

const getProducts = async () => {
  const result = await productsModel.findAllProducts();
  return { type: null, message: result };
};

// pegar um produto pelo id
const getProductById = async (id) => {
  const product = await productsModel.findById(id);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const insertNewProduct = async (newProduct) => {
  if (!newProduct.name) return { type: 'PRODUCT_IS_INVALID', message: '"name" is required' };
  if (newProduct.name.length < 5) {
    return {
      type: 'PRODUCT_SIZE_IS_INVALID',
      message: '"name" length must be at least 5 characters long',
    };
  }
  const product = await productsModel.insert(newProduct);
  console.log(product);
  return { type: null, message: product };
};

module.exports = { 
  getProducts,
  getProductById,
  insertNewProduct,
};
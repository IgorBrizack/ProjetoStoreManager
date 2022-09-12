const { productsModel } = require('../models');

// pega todos os produto
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

// inserir um novo produto
const insertNewProduct = async (newProduct) => {
  if (!newProduct.name) return { type: 'PRODUCT_IS_INVALID', message: '"name" is required' };
  if (newProduct.name.length < 5) {
    return {
      type: 'PRODUCT_SIZE_IS_INVALID',
      message: '"name" length must be at least 5 characters long',
    };
  }
  const product = await productsModel.insert(newProduct);
  return { type: null, message: product };
};

const insertAtualizedProduct = async (id, body) => {
  const productAtualized = await productsModel.insertAtualizedData(id, body);
  if (productAtualized === 0) {
    return {
      type: 'PRODUCT_NOT_FOUND',
      message: 'Product not found',
    }; 
  }

  return { type: null, message: { id, name: body.name } };
};

module.exports = { 
  getProducts,
  getProductById,
  insertNewProduct,
  insertAtualizedProduct,
};
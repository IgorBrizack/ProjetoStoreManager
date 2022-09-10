const productsModel = require('../../models/products.model');

const noProductId = (sales) => {
  const result = sales.some((sale) => !Object.prototype.hasOwnProperty.call(sale, 'productId'));
  return result;
};

const noQuantity = (sales) => {
  const result = sales.some((sale) => !Object.prototype.hasOwnProperty.call(sale, 'quantity'));
  return result;
};

const isLower = (sales) => {
  const result = sales.some((sale) => sale.quantity <= 0);
  return result;
}; 

const verifyProductIdDb = async (sales) => {
  const data = await Promise.all(sales.map((element) => productsModel.findById(element.productId)));
  if (data.some((el) => el === undefined)) {
  return {
      type: 'PRODUCT_NOT_FOUND',
      message: 'Product not found',
    }; 
  }
  return false;
};

const verifyValidations = async (sales) => {
  const hasNotProductId = noProductId(sales);
  if (hasNotProductId) return { type: 'PRODUCT_IS_INVALID', message: '"productId" is required' };
  const hasNotQuantity = noQuantity(sales);
  if (hasNotQuantity) return { type: 'PRODUCT_IS_INVALID', message: '"quantity" is required' };
  const lowerThenZero = isLower(sales);
  if (lowerThenZero) {
  return {
      type: 'PRODUCT_SIZE_IS_INVALID',
      message: '"quantity" must be greater than or equal to 1',
    }; 
  }
  const hasNotProductInId = await verifyProductIdDb(sales);
  if (hasNotProductInId) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: '' };
};

module.exports = {
  verifyValidations,
};

// productsController.allProducts
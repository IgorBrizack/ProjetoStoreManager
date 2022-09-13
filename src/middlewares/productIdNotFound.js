const productsService = require('../services/products.service');

// const getProductById = async (id) => {
//   const product = await productsModel.findById(id);
//   if (product) return { type: null, message: product };
//   return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
// };

const productIdNotFound = async (req, res, next) => {
  const { body } = req;
  const result = body.some((ele) => !Object.prototype.hasOwnProperty.call(ele, 'productId'));
  if (result) return res.status(400).json({ message: '"productId" is required' });
  const data = await Promise.all(body
    .map((element) => productsService.getProductById(element.productId)));
  console.log(data);
  if (data.some((el) => el.type === 'PRODUCT_NOT_FOUND')) {
  return res
      .status(404).json({ message: 'Product not found' }); 
  }
  next();
};

module.exports = {
  productIdNotFound,
};
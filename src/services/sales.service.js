const { salesModel } = require('../models');
const validate = require('./validations/validateSales');

const insertSales = async (sales) => {
  const validations = await validate.verifyValidations(sales);
  
  if (validations.type !== null) {
    return validations;
  }

  const saleId = await salesModel.startSale();
  const productsSale = await salesModel.insert(saleId, sales);
  return { type: null, message: productsSale };
};

const getAllSalesService = async () => {
  const allProductsFromSale = await salesModel.getAllSalesModel();
  return allProductsFromSale;
};

const getSaleByIdService = async (id) => {
  const product = await salesModel.getSaleByIdModel(id);
  if (product.length) return { type: null, message: product };
  return { type: 'SALES_NOT_FOUND', message: 'Sale not found' };
};

const deleteProduct = async (id) => {
  const deletedStatus = await salesModel.deletedProductData(id);
  if (deletedStatus === 0) {
    return {
      type: 'PRODUCT_NOT_FOUND',
      message: 'Sale not found',
    };
  }

  return { type: null };
};

const insertAtualizedSale = async (id, body) => {
  await salesModel.insertAtualizedData(id, body);

  return { type: null, message: { saleId: id, itemsUpdated: body } };
};

module.exports = {
    insertSales,
  getAllSalesService,
  getSaleByIdService,
  deleteProduct,
  insertAtualizedSale,
};
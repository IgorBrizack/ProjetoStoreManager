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

module.exports = {
    insertSales,
  getAllSalesService,
  getSaleByIdService,
};
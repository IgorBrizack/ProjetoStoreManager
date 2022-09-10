const { salesModel } = require('../models');
const validate = require('./validations/validateSales');

const insertSales = async (sales) => {
  const validations = await validate.verifyValidations(sales);
  
  if (validations.type !== null) {
    return validations;
  }

  const saleId = await salesModel.startSale();
  const product = await salesModel.insert(saleId, sales);
  return { type: null, message: product };
};

module.exports = {
  insertSales,
};
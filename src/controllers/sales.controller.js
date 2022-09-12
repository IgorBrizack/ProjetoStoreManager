const errorMap = require('../utils/errorMap');
const { salesService } = require('../services');

const insertSalesController = async (req, res) => {
  const { body } = req;
  const { type, message } = await salesService.insertSales(body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

module.exports = {
  insertSalesController,
};
const errorMap = require('../utils/errorMap');
const { salesService } = require('../services');

const insertSalesController = async (req, res) => {
  const { body } = req;
  const { type, message } = await salesService.insertSales(body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

const getAllSales = async (_req, res) => {
  const result = await salesService.getAllSalesService();
  res.status(200).json(result);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { message, type } = await salesService.getSaleByIdService(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  insertSalesController,
  getAllSales,
  getSaleById,
};
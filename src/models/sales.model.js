const connection = require('./connection');

const insert = async (saleId, sales) => {
  sales.forEach(async (element) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [saleId, element.productId, element.quantity],
    );
  });
  return { id: saleId, itemsSold: sales };
};

const startSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES ()',
  );
  return insertId;
};

const getAllSalesModel = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales',
  );
  return result;
};

module.exports = {
  insert,
  startSale,
  getAllSalesModel,
};
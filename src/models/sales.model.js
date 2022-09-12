const camelize = require('camelize');
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
    `SELECT sale_id, date, product_id, quantity FROM StoreManager.sales_products AS pro
    INNER JOIN StoreManager.sales AS sa
    ON pro.sale_id = sa.id`,
  );
  return camelize(result);
};

const getSaleByIdModel = async (id) => {
  const [result] = await connection.execute(
    `SELECT date, product_id, quantity FROM StoreManager.sales_products AS pro
    INNER JOIN StoreManager.sales AS sa
    ON pro.sale_id = sa.id
    WHERE sale_id = ?`,
    [id],
  );

  return camelize(result);
};

module.exports = {
  insert,
  startSale,
  getAllSalesModel,
  getSaleByIdModel,
};
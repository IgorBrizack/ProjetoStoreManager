const connection = require('./connection');

const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const findById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return result;
};

const insert = async (newProduct) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [newProduct.name],
  );

  const result = { id: insertId, name: newProduct.name };

  return result;
};

const insertAtualizedData = async (id, atualizedProduct) => {
  const [{ affectedRows }] = await connection.execute(
    `UPDATE StoreManager.products
    SET name = ?
    WHERE id = ?`, [atualizedProduct.name, id],
  );
  
  return affectedRows;
};

const deletedProductData = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    `DELETE FROM StoreManager.products
    WHERE id = ?`, [id],
  );

  return affectedRows;
};

module.exports = {
  findAllProducts,
  findById,
  insert,
  insertAtualizedData,
  deletedProductData,
};
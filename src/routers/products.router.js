const express = require('express');
const connection = require('../models/connection');

const router = express.Router();

router.get('/', async (_req, res) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  res.status(200).json(result);
  return result;
});

module.exports = router;
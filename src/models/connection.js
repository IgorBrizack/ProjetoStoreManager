const mysql = require('mysql2/promise');

// require('dotenv').config();

const connection = mysql.createPool({
  host: 'db',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'StoreManager',
});

// const connection = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   port: 3306,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MY_SQL_DATABASE || 'StoreManager',
// });

module.exports = connection;

// MYSQL_HOST = localhost
// MYSQL_USER = seuusuario
// MYSQL_PASSWORD = suasenha
// MYSQL_DATABASE = StoreManager
// PORT = 3000
// HOST = localhost
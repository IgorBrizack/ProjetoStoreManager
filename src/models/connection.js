const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'db',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'StoreManager',
});

module.exports = connection;

// MYSQL_HOST = localhost
// MYSQL_USER = seuusuario
// MYSQL_PASSWORD = suasenha
// MYSQL_DATABASE = StoreManager
// PORT = 3000
// HOST = localhost
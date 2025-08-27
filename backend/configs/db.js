const mysql = require('mysql2');

const db = mysql.createConnection({
   host: process.env.MYSQL_DB_HOST,
   port: process.env.MYSQL_DB_PORT,
   user: process.env.MYSQL_USER,
   password: process.env.MYSQL_USER_PASSWORD,
   database: process.env.MYSQL_DATABASE
});    

module.exports = db; 
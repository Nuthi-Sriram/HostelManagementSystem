const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'root',        // MYSQL USERNAME
    password : 'Password123@',    // MYSQL PASSWORD
    database : 'socka'      // MYSQL DB NAME
}).promise();
module.exports = dbConnection;
const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'Demo',        // MYSQL USERNAME
    password : 'Demo@123',    // MYSQL PASSWORD
    database : 'hostel'      // MYSQL DB NAME
}).promise();
module.exports = dbConnection;
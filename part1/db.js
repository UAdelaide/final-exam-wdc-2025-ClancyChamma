const mysql = require('mysql2/promise');

const db = mysql.createPool({
    socketPath: '/var/run/mysqld/mysqld.sock', // Adjust this path if necessary
    host: 'localhost',
    user: 'root',
    password: 'mypassword',
    database: 'DogWalkService',
});

module.exports = db;
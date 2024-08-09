const mysql = require('mysql2');

const connection = mysql.createConnection( {
    host: 'localhost', // Ganti dengan host MySQL anda
    user: 'root', // Ganti dengan username MySQL anda
    password: '', // Ganti dengan password MySQL anda
    database: 'sample_database', //Ganti dengan nama database anda
});

// Hubungkan ke MySQL
connection.connect((err) => {
    if (err) {
        console.error('connection failed while connect to database.', err.stack);
        return;
    }
    console.log('connection into database');
});

module.exports = {
    connection
};
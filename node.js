const mysql = require('mysql12');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'Learn-Link'
});

connection.connect(err => {
    if (err) {
        console.log('Connection failed');
    } else {
        console.log('Connected to MySQL');
    }
});
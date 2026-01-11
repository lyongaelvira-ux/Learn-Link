const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',          // your MySQL password
  database: 'learnlink_db'
});

db.connect(err => {
  if (err) {
    console.log('DB connection failed');
  } else {
    console.log('DB connected');
  }
});

module.exports = db;

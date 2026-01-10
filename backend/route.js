const express = require('express');
const db = require('./db');

const router = express.Router();


// 🔐 LOGIN (AUTHENTICATION)
router.post('/login', (req, res) => {
  const { email, role } = req.body;

  const sql = `
    SELECT * FROM users
    WHERE email = ? AND role = ?
  `;

  db.query(sql, [email, role], (err, result) => {
    if (err) return res.status(500).send('Server error');

    if (result.length > 0) {
      res.json({ message: 'Login successful', user: result[0] });
    } else {
      res.json({ message: 'Invalid credentials' });
    }
  });

});


// 📘 STUDENT – VIEW ASSIGNMENTS
router.get('/assignments', (req, res) => {
  const sql = `
    SELECT title, deadline FROM assignments
  `;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});


// 📊 STUDENT – TRACK PROGRESS
router.get('/progress/:studentId', (req, res) => {
  const sql = `
    SELECT a.title, s.status, s.score
    FROM submissions s
    JOIN assignments a ON s.assignment_id = a.assignment_id
    WHERE s.student_id = ?
  `;
  db.query(sql, [req.params.studentId], (err, result) => 

{
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});


// 👨‍🏫 LECTURER – VIEW STUDENTS
router.get('/lecturer/students', (req, res) => {
  const sql = `
    SELECT u.name, a.title, s.status, s.score
    FROM submissions s
    JOIN users u ON s.student_id = u.user_id
    JOIN assignments a ON s.assignment_id = a.assignment_id
  `;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});


// 🛎️ SEND REMINDER
router.post('/notify', (req, res) => {

  const { user_id, message } = req.body;

  const sql = `
    INSERT INTO notifications (user_id, message)
    VALUES (?, ?)
  `;
  db.query(sql, [user_id, message], err => {
    if (err) return res.status(500).send(err);
    res.send('Notification sent');
  });
});

module.exports = router;

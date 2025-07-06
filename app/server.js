const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'mysql-db',
  user: 'root',
  password: 'root',
  database: 'crud_db'
});

db.connect(err => {
  if (err) throw err;
  console.log("Conectado ao MySQL");
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post('/users', (req, res) => {
  const { name } = req.body;
  db.query('INSERT INTO users (name) VALUES (?)', [name], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, name });
  });
});

app.listen(3000, () => console.log('Servidor Node rodando na porta 3000'));

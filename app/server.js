const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'mysql-db',
  user: 'root',
  password: 'root',
  database: 'crud_db'
});

// Conecta ao banco
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err);
    process.exit(1);
  }
  console.log('Conectado ao MySQL!');
});

// [GET] Buscar todos os usuários
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
});

// [POST] Criar novo usuário
app.post('/users', (req, res) => {
  const { nome } = req.body;

  // Validação
  if (!nome) {
    return res.status(400).json({ erro: 'Nome é obrigatório' });
  }

  const query = 'INSERT INTO users (name) VALUES (?)';
  db.query(query, [nome], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(201).json({ id: result.insertId, nome });
  });
});

// [PUT] Atualizar usuário por ID
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: 'Nome é obrigatório' });
  }

  const query = 'UPDATE users SET name = ? WHERE id = ?';
  db.query(query, [nome, id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.json({ mensagem: 'Usuário atualizado com sucesso' });
  });
});

// [DELETE] Deletar users por ID
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.json({ mensagem: 'Usuário deletado com sucesso' });
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor Node rodando em http://localhost:${PORT}`);
});

const express = require('express');
// Paste the code that lets you use MySQL
const mysql = require('mysql');

const app = express();

app.use(express.static('public'));
// Define the connection constant and set it to code containing the connection information
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'list_app'
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000);

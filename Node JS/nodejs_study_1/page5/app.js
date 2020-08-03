const express = require('express');
const app = express();

// Paste the code to specify the folder that stores CSS and image files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

app.get('/top', (req, res) => {
  res.render('top.ejs');
});

app.listen(3000);

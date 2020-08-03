const express = require('express');
const app = express();

app.use(express.static('public'));

// Delete the route below
// Delete up to here

// Change the URL of the route to the root URL
app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000);

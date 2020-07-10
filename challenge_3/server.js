const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Serve files to client

app.use(express.static(path.join(__dirname, 'public'))); // serve index.html
app.use(express.static(path.join(__dirname, 'compiled/src/'))); // serve transpiled app
app.use(express.static(path.join(__dirname, 'compiled/src/components'))); // serve components
app.use(express.static(path.join(__dirname, 'assets'))); // serve assets
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/react/dist/'))); // serve react
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/react-dom/dist/'))); // serve react-dom
app.use('/styles', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css/'))); // serve bootstrap styles
app.use('/styles', express.static(path.join(__dirname, '/assets/'))); // serve custom styles


app.get('/', (req, res) => {
  res.render('index');
})






app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))



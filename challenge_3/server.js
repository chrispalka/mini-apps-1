const express = require('express');
const headers = require('./cors.json');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const { insertRow, queryAll } = require('./db/index.js');


// Serve files to client
app.use(express.static(path.join(__dirname, 'public'))); // serve index.html
app.use(express.static(path.join(__dirname, 'compiled/src'))); // serve transpiled app
app.use(express.static(path.join(__dirname, 'models'))); // serve assets
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/react/dist/'))); // serve react
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/react-dom/dist/'))); // serve react-dom
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/'))); // serve react-dom
app.use('/styles', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css/'))); // serve bootstrap styles
app.use('/styles', express.static(path.join(__dirname, '/assets/'))); // serve custom styles


app.get('/', (req, res) => {
  res.render('index');
})

app.post('/submit', upload.none(), (req, res) => {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var addressone = req.body.addressone;
  var addresstwo = req.body.addresstwo;
  var city = req.body.city;
  var state = req.body.state;
  var zip = req.body.zip;
  var phone = req.body.phone;
  var ccnum = req.body.ccnum;
  var expiry = req.body.expiry;
  var ccv = req.body.ccv;
  var billingzip = req.body.billingzip;
  if (username !== undefined) {
    var query = `INSERT INTO users (username,
      email, password, addressone, addresstwo,
      city, state, zip, phone, ccnum, expiry,
      ccv, billingzip) VALUES ('${username}', '${email}', '${password}',
      '', '', '', '', '', '',
      '', '', '', '')`;
      insertRow(query)
  } else if (addressone !== undefined) {
    var query = `UPDATE users SET addressone = '${addressone}', addresstwo = '${addresstwo}', city = '${city}', state = '${state}', zip = '${zip}', phone = '${phone}' WHERE LAST_INSERT_ID();`
    insertRow(query)
  } else {
    var query = `UPDATE users SET ccnum = '${ccnum}', expiry = '${expiry}', ccv = '${ccv}', billingzip = '${billingzip}' WHERE LAST_INSERT_ID();`
    insertRow(query)
  }

  // var data = new Buffer.alloc(0);
  // console.log('Success submission!! ', req)
  // req.on('data', chunk => {
  //   data = Buffer.concat([data, chunk])
  // });
  // req.on('end', () => {
  //   data = data.toString().split(' ')
  //   console.log('DATA! ', data);
  // });
  res.set(headers)
  res.status(200).end()
})






app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))



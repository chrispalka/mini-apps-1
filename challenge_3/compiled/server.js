const express = require('express');
const headers = require('./cors.json');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
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
});

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
    insertRow(query);
  } else if (addressone !== undefined) {
    var query = `UPDATE users SET addressone = '${addressone}', addresstwo = '${addresstwo}', city = '${city}', state = '${state}', zip = '${zip}', phone = '${phone}' WHERE LAST_INSERT_ID();`;
    insertRow(query);
  } else {
    var query = `UPDATE users SET ccnum = '${ccnum}', expiry = '${expiry}', ccv = '${ccv}', billingzip = '${billingzip}' WHERE LAST_INSERT_ID();`;
    insertRow(query);
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
  res.set(headers);
  res.status(200).end();
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImhlYWRlcnMiLCJmcyIsInBhdGgiLCJhcHAiLCJwb3J0IiwibXVsdGVyIiwidXBsb2FkIiwiZGVzdCIsImluc2VydFJvdyIsInF1ZXJ5QWxsIiwidXNlIiwic3RhdGljIiwiam9pbiIsIl9fZGlybmFtZSIsImdldCIsInJlcSIsInJlcyIsInJlbmRlciIsInBvc3QiLCJub25lIiwidXNlcm5hbWUiLCJib2R5IiwiZW1haWwiLCJwYXNzd29yZCIsImFkZHJlc3NvbmUiLCJhZGRyZXNzdHdvIiwiY2l0eSIsInN0YXRlIiwiemlwIiwicGhvbmUiLCJjY251bSIsImV4cGlyeSIsImNjdiIsImJpbGxpbmd6aXAiLCJ1bmRlZmluZWQiLCJxdWVyeSIsInNldCIsInN0YXR1cyIsImVuZCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLE1BQU1DLFVBQVVELFFBQVEsYUFBUixDQUFoQjtBQUNBLE1BQU1FLEtBQUtGLFFBQVEsSUFBUixDQUFYO0FBQ0EsTUFBTUcsT0FBT0gsUUFBUSxNQUFSLENBQWI7QUFDQSxNQUFNSSxNQUFNTCxTQUFaO0FBQ0EsTUFBTU0sT0FBTyxJQUFiO0FBQ0EsTUFBTUMsU0FBVU4sUUFBUSxRQUFSLENBQWhCO0FBQ0EsTUFBTU8sU0FBU0QsT0FBTyxFQUFFRSxNQUFNLFVBQVIsRUFBUCxDQUFmO0FBQ0EsTUFBTSxFQUFFQyxTQUFGLEVBQWFDLFFBQWIsS0FBMEJWLFFBQVEsZUFBUixDQUFoQzs7QUFHQTtBQUNBSSxJQUFJTyxHQUFKLENBQVFaLFFBQVFhLE1BQVIsQ0FBZVQsS0FBS1UsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFFBQXJCLENBQWYsQ0FBUixFLENBQXlEO0FBQ3pEVixJQUFJTyxHQUFKLENBQVFaLFFBQVFhLE1BQVIsQ0FBZVQsS0FBS1UsSUFBTCxDQUFVQyxT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SixDQUFRcEMsT0FBUjtBQUNBZ0IsTUFBSXFCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQjtBQUNELENBekNEOztBQWdEQW5DLElBQUlvQyxNQUFKLENBQVduQyxJQUFYLEVBQWlCLE1BQU1vQyxRQUFRQyxHQUFSLENBQWEsNkNBQTRDckMsSUFBSyxFQUE5RCxDQUF2QiIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgaGVhZGVycyA9IHJlcXVpcmUoJy4vY29ycy5qc29uJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcG9ydCA9IDMwMDA7XG5jb25zdCBtdWx0ZXIgID0gcmVxdWlyZSgnbXVsdGVyJylcbmNvbnN0IHVwbG9hZCA9IG11bHRlcih7IGRlc3Q6ICd1cGxvYWRzLycgfSlcbmNvbnN0IHsgaW5zZXJ0Um93LCBxdWVyeUFsbCB9ID0gcmVxdWlyZSgnLi9kYi9pbmRleC5qcycpO1xuXG5cbi8vIFNlcnZlIGZpbGVzIHRvIGNsaWVudFxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAncHVibGljJykpKTsgLy8gc2VydmUgaW5kZXguaHRtbFxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnY29tcGlsZWQvc3JjJykpKTsgLy8gc2VydmUgdHJhbnNwaWxlZCBhcHBcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ21vZGVscycpKSk7IC8vIHNlcnZlIGFzc2V0c1xuYXBwLnVzZSgnL3NjcmlwdHMnLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnL25vZGVfbW9kdWxlcy9yZWFjdC9kaXN0LycpKSk7IC8vIHNlcnZlIHJlYWN0XG5hcHAudXNlKCcvc2NyaXB0cycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcvbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9kaXN0LycpKSk7IC8vIHNlcnZlIHJlYWN0LWRvbVxuYXBwLnVzZSgnL3NjcmlwdHMnLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnL25vZGVfbW9kdWxlcy8nKSkpOyAvLyBzZXJ2ZSByZWFjdC1kb21cbmFwcC51c2UoJy9zdHlsZXMnLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvJykpKTsgLy8gc2VydmUgYm9vdHN0cmFwIHN0eWxlc1xuYXBwLnVzZSgnL3N0eWxlcycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcvYXNzZXRzLycpKSk7IC8vIHNlcnZlIGN1c3RvbSBzdHlsZXNcblxuXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5yZW5kZXIoJ2luZGV4Jyk7XG59KVxuXG5hcHAucG9zdCgnL3N1Ym1pdCcsIHVwbG9hZC5ub25lKCksIChyZXEsIHJlcykgPT4ge1xuICB2YXIgdXNlcm5hbWUgPSByZXEuYm9keS51c2VybmFtZTtcbiAgdmFyIGVtYWlsID0gcmVxLmJvZHkuZW1haWw7XG4gIHZhciBwYXNzd29yZCA9IHJlcS5ib2R5LnBhc3N3b3JkO1xuICB2YXIgYWRkcmVzc29uZSA9IHJlcS5ib2R5LmFkZHJlc3NvbmU7XG4gIHZhciBhZGRyZXNzdHdvID0gcmVxLmJvZHkuYWRkcmVzc3R3bztcbiAgdmFyIGNpdHkgPSByZXEuYm9keS5jaXR5O1xuICB2YXIgc3RhdGUgPSByZXEuYm9keS5zdGF0ZTtcbiAgdmFyIHppcCA9IHJlcS5ib2R5LnppcDtcbiAgdmFyIHBob25lID0gcmVxLmJvZHkucGhvbmU7XG4gIHZhciBjY251bSA9IHJlcS5ib2R5LmNjbnVtO1xuICB2YXIgZXhwaXJ5ID0gcmVxLmJvZHkuZXhwaXJ5O1xuICB2YXIgY2N2ID0gcmVxLmJvZHkuY2N2O1xuICB2YXIgYmlsbGluZ3ppcCA9IHJlcS5ib2R5LmJpbGxpbmd6aXA7XG4gIGlmICh1c2VybmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHF1ZXJ5ID0gYElOU0VSVCBJTlRPIHVzZXJzICh1c2VybmFtZSxcbiAgICAgIGVtYWlsLCBwYXNzd29yZCwgYWRkcmVzc29uZSwgYWRkcmVzc3R3byxcbiAgICAgIGNpdHksIHN0YXRlLCB6aXAsIHBob25lLCBjY251bSwgZXhwaXJ5LFxuICAgICAgY2N2LCBiaWxsaW5nemlwKSBWQUxVRVMgKCcke3VzZXJuYW1lfScsICcke2VtYWlsfScsICcke3Bhc3N3b3JkfScsXG4gICAgICAnJywgJycsICcnLCAnJywgJycsICcnLFxuICAgICAgJycsICcnLCAnJywgJycpYDtcbiAgICAgIGluc2VydFJvdyhxdWVyeSlcbiAgfSBlbHNlIGlmIChhZGRyZXNzb25lICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcXVlcnkgPSBgVVBEQVRFIHVzZXJzIFNFVCBhZGRyZXNzb25lID0gJyR7YWRkcmVzc29uZX0nLCBhZGRyZXNzdHdvID0gJyR7YWRkcmVzc3R3b30nLCBjaXR5ID0gJyR7Y2l0eX0nLCBzdGF0ZSA9ICcke3N0YXRlfScsIHppcCA9ICcke3ppcH0nLCBwaG9uZSA9ICcke3Bob25lfScgV0hFUkUgTEFTVF9JTlNFUlRfSUQoKTtgXG4gICAgaW5zZXJ0Um93KHF1ZXJ5KVxuICB9IGVsc2Uge1xuICAgIHZhciBxdWVyeSA9IGBVUERBVEUgdXNlcnMgU0VUIGNjbnVtID0gJyR7Y2NudW19JywgZXhwaXJ5ID0gJyR7ZXhwaXJ5fScsIGNjdiA9ICcke2Njdn0nLCBiaWxsaW5nemlwID0gJyR7YmlsbGluZ3ppcH0nIFdIRVJFIExBU1RfSU5TRVJUX0lEKCk7YFxuICAgIGluc2VydFJvdyhxdWVyeSlcbiAgfVxuXG4gIC8vIHZhciBkYXRhID0gbmV3IEJ1ZmZlci5hbGxvYygwKTtcbiAgLy8gY29uc29sZS5sb2coJ1N1Y2Nlc3Mgc3VibWlzc2lvbiEhICcsIHJlcSlcbiAgLy8gcmVxLm9uKCdkYXRhJywgY2h1bmsgPT4ge1xuICAvLyAgIGRhdGEgPSBCdWZmZXIuY29uY2F0KFtkYXRhLCBjaHVua10pXG4gIC8vIH0pO1xuICAvLyByZXEub24oJ2VuZCcsICgpID0+IHtcbiAgLy8gICBkYXRhID0gZGF0YS50b1N0cmluZygpLnNwbGl0KCcgJylcbiAgLy8gICBjb25zb2xlLmxvZygnREFUQSEgJywgZGF0YSk7XG4gIC8vIH0pO1xuICByZXMuc2V0KGhlYWRlcnMpXG4gIHJlcy5zdGF0dXMoMjAwKS5lbmQoKVxufSlcblxuXG5cblxuXG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coYEV4YW1wbGUgYXBwIGxpc3RlbmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKSlcblxuXG4iXX0=
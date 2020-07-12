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
  console.log(req.body);
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
  // if (username !== undefined) {
  var query = `INSERT INTO users (username,
      email, password, addressone, addresstwo,
      city, state, zip, phone, ccnum, expiry,
      ccv, billingzip) VALUES ('${username}', '${email}', '${password}',
      '', '', '', '', '', '',
      '', '', '', '')`;
  insertRow(query);
  // } else if (addressone !== undefined) {
  // var query = `UPDATE users SET addressone = '${addressone}', addresstwo = '${addresstwo}', city = '${city}', state = '${state}', zip = '${zip}', phone = '${phone}' WHERE LAST_INSERT_ID();`
  // insertRow(query)
  // } else {
  // var query = `UPDATE users SET ccnum = '${ccnum}', expiry = '${expiry}', ccv = '${ccv}', billingzip = '${billingzip}' WHERE LAST_INSERT_ID();`
  // insertRow(query)
  // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImhlYWRlcnMiLCJmcyIsInBhdGgiLCJhcHAiLCJwb3J0IiwibXVsdGVyIiwidXBsb2FkIiwiZGVzdCIsImluc2VydFJvdyIsInF1ZXJ5QWxsIiwidXNlIiwic3RhdGljIiwiam9pbiIsIl9fZGlybmFtZSIsImdldCIsInJlcSIsInJlcyIsInJlbmRlciIsInBvc3QiLCJub25lIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJhZGRyZXNzb25lIiwiYWRkcmVzc3R3byIsImNpdHkiLCJzdGF0ZSIsInppcCIsInBob25lIiwiY2NudW0iLCJleHBpcnkiLCJjY3YiLCJiaWxsaW5nemlwIiwicXVlcnkiLCJzZXQiLCJzdGF0dXMiLCJlbmQiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLE1BQU1DLFVBQVVELFFBQVEsYUFBUixDQUFoQjtBQUNBLE1BQU1FLEtBQUtGLFFBQVEsSUFBUixDQUFYO0FBQ0EsTUFBTUcsT0FBT0gsUUFBUSxNQUFSLENBQWI7QUFDQSxNQUFNSSxNQUFNTCxTQUFaO0FBQ0EsTUFBTU0sT0FBTyxJQUFiO0FBQ0EsTUFBTUMsU0FBVU4sUUFBUSxRQUFSLENBQWhCO0FBQ0EsTUFBTU8sU0FBU0QsT0FBTyxFQUFFRSxNQUFNLFVBQVIsRUFBUCxDQUFmO0FBQ0EsTUFBTSxFQUFFQyxTQUFGLEVBQWFDLFFBQWIsS0FBMEJWLFFBQVEsZUFBUixDQUFoQzs7QUFHQTtBQUNBSSxJQUFJTyxHQUFKLENBQVFaLFFBQVFhLE1BQVIsQ0FBZVQsS0FBS1UsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFFBQXJCLENBQWYsQ0FBUixFLENBQXlEO0FBQ3pEVixJQUFJTyxHQUFKLENBQVFaLFFBQVFhLE1BQVIsQ0FBZVQsS0FBS1UsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGNBQXJCLENBQWYsQ0FBUixFLENBQStEO0FBQy9EVixJQUFJTyxHQUFKLENBQVFaLFFBQVFhLE1BQVIsQ0FBZVQsS0FBS1UsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFFBQXJCLENBQWYsQ0FBUixFLENBQXlEO0FBQ3pEVixJQUFJTyxHQUFKLENBQVEsVUFBUixFQUFvQlosUUFBUWEsTUFBUixDQUFlVCxLQUFLVSxJQUFMLENBQVVDLFNBQVYsRUFBcUIsMkJBQXJCLENBQWYsQ0FBcEIsRSxDQUF3RjtBQUN4RlYsSUFBSU8sR0FBSixDQUFRLFVBQVIsRUFBb0JaLFFBQVFhLE1BQVIsQ0FBZVQsS0FBS1UsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLCtCQUFyQixDQUFmLENBQXBCLEUsQ0FBNEY7QUFDNUZWLElBQUlPLEdBQUosQ0FBUSxVQUFSLEVBQW9CWixRQUFRYSxNQUFSLENBQWVULEtBQUtVLElBQUwsQ0FBVUMsU0FBVixFQUFxQixnQkFBckIsQ0FBZixDQUFwQixFLENBQTZFO0FBQzdFVixJQUFJTyxHQUFKLENBQVEsU0FBUixFQUFtQlosUUFBUWEsTUFBUixDQUFlVCxLQUFLVSxJQUFMLENBQVVDLFNBQVYsRUFBcUIsbUNBQXJCLENBQWYsQ0FBbkIsRSxDQUErRjtBQUMvRlYsSUFBSU8sR0FBSixDQUFRLFNBQVIsRUFBbUJaLFFBQVFhLE1BQVIsQ0FBZVQsS0FBS1UsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFVBQXJCLENBQWYsQ0FBbkIsRSxDQUFzRTs7O0FBR3RFVixJQUFJVyxHQUFKLENBQVEsR0FBUixFQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCQSxNQUFJQyxNQUFKLENBQVcsT0FBWDtBQUNELENBRkQ7O0FBSUFkLElBQUllLElBQUosQ0FBUyxTQUFULEVBQW9CWixPQUFPYSxJQUFQLEVBQXBCLEVBQW1DLENBQUNKLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQy9DSSxVQUFRQyxHQUFSLENBQVlOLElBQUlPLElBQWhCO0FBQ0EsTUFBSUMsV0FBV1IsSUFBSU8sSUFBSixDQUFTQyxRQUF4QjtBQUNBLE1BQUlDLFFBQVFULElBQUlPLElBQUosQ0FBU0UsS0FBckI7QUFDQSxNQUFJQyxXQUFXVixJQUFJTyxJQUFKLENBQVNHLFFBQXhCO0FBQ0EsTUFBSUMsYUFBYVgsSUFBSU8sSUFBSixDQUFTSSxVQUExQjtBQUNBLE1BQUlDLGFBQWFaLElBQUlPLElBQUosQ0FBU0ssVUFBMUI7QUFDQSxNQUFJQyxPQUFPYixJQUFJTyxJQUFKLENBQVNNLElBQXBCO0FBQ0EsTUFBSUMsUUFBUWQsSUFBSU8sSUFBSixDQUFTTyxLQUFyQjtBQUNBLE1BQUlDLE1BQU1mLElBQUlPLElBQUosQ0FBU1EsR0FBbkI7QUFDQSxNQUFJQyxRQUFRaEIsSUFBSU8sSUFBSixDQUFTUyxLQUFyQjtBQUNBLE1BQUlDLFFBQVFqQixJQUFJTyxJQUFKLENBQVNVLEtBQXJCO0FBQ0EsTUFBSUMsU0FBU2xCLElBQUlPLElBQUosQ0FBU1csTUFBdEI7QUFDQSxNQUFJQyxNQUFNbkIsSUFBSU8sSUFBSixDQUFTWSxHQUFuQjtBQUNBLE1BQUlDLGFBQWFwQixJQUFJTyxJQUFKLENBQVNhLFVBQTFCO0FBQ0E7QUFDRSxNQUFJQyxRQUFTOzs7a0NBR2lCYixRQUFTLE9BQU1DLEtBQU0sT0FBTUMsUUFBUzs7c0JBSGxFO0FBTUVqQixZQUFVNEIsS0FBVjtBQUNKO0FBQ0U7QUFDQTtBQUNGO0FBQ0U7QUFDQTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBcEIsTUFBSXFCLEdBQUosQ0FBUXJDLE9BQVI7QUFDQWdCLE1BQUlzQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEI7QUFDRCxDQTFDRDs7QUFpREFwQyxJQUFJcUMsTUFBSixDQUFXcEMsSUFBWCxFQUFpQixNQUFNZ0IsUUFBUUMsR0FBUixDQUFhLDZDQUE0Q2pCLElBQUssRUFBOUQsQ0FBdkIiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGhlYWRlcnMgPSByZXF1aXJlKCcuL2NvcnMuanNvbicpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IHBvcnQgPSAzMDAwO1xuY29uc3QgbXVsdGVyICA9IHJlcXVpcmUoJ211bHRlcicpXG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoeyBkZXN0OiAndXBsb2Fkcy8nIH0pXG5jb25zdCB7IGluc2VydFJvdywgcXVlcnlBbGwgfSA9IHJlcXVpcmUoJy4vZGIvaW5kZXguanMnKTtcblxuXG4vLyBTZXJ2ZSBmaWxlcyB0byBjbGllbnRcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycpKSk7IC8vIHNlcnZlIGluZGV4Lmh0bWxcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ2NvbXBpbGVkL3NyYycpKSk7IC8vIHNlcnZlIHRyYW5zcGlsZWQgYXBwXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdtb2RlbHMnKSkpOyAvLyBzZXJ2ZSBhc3NldHNcbmFwcC51c2UoJy9zY3JpcHRzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy9ub2RlX21vZHVsZXMvcmVhY3QvZGlzdC8nKSkpOyAvLyBzZXJ2ZSByZWFjdFxuYXBwLnVzZSgnL3NjcmlwdHMnLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vZGlzdC8nKSkpOyAvLyBzZXJ2ZSByZWFjdC1kb21cbmFwcC51c2UoJy9zY3JpcHRzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy9ub2RlX21vZHVsZXMvJykpKTsgLy8gc2VydmUgcmVhY3QtZG9tXG5hcHAudXNlKCcvc3R5bGVzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzLycpKSk7IC8vIHNlcnZlIGJvb3RzdHJhcCBzdHlsZXNcbmFwcC51c2UoJy9zdHlsZXMnLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnL2Fzc2V0cy8nKSkpOyAvLyBzZXJ2ZSBjdXN0b20gc3R5bGVzXG5cblxuYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xuICByZXMucmVuZGVyKCdpbmRleCcpO1xufSlcblxuYXBwLnBvc3QoJy9zdWJtaXQnLCB1cGxvYWQubm9uZSgpLCAocmVxLCByZXMpID0+IHtcbiAgY29uc29sZS5sb2cocmVxLmJvZHkpXG4gIHZhciB1c2VybmFtZSA9IHJlcS5ib2R5LnVzZXJuYW1lO1xuICB2YXIgZW1haWwgPSByZXEuYm9keS5lbWFpbDtcbiAgdmFyIHBhc3N3b3JkID0gcmVxLmJvZHkucGFzc3dvcmQ7XG4gIHZhciBhZGRyZXNzb25lID0gcmVxLmJvZHkuYWRkcmVzc29uZTtcbiAgdmFyIGFkZHJlc3N0d28gPSByZXEuYm9keS5hZGRyZXNzdHdvO1xuICB2YXIgY2l0eSA9IHJlcS5ib2R5LmNpdHk7XG4gIHZhciBzdGF0ZSA9IHJlcS5ib2R5LnN0YXRlO1xuICB2YXIgemlwID0gcmVxLmJvZHkuemlwO1xuICB2YXIgcGhvbmUgPSByZXEuYm9keS5waG9uZTtcbiAgdmFyIGNjbnVtID0gcmVxLmJvZHkuY2NudW07XG4gIHZhciBleHBpcnkgPSByZXEuYm9keS5leHBpcnk7XG4gIHZhciBjY3YgPSByZXEuYm9keS5jY3Y7XG4gIHZhciBiaWxsaW5nemlwID0gcmVxLmJvZHkuYmlsbGluZ3ppcDtcbiAgLy8gaWYgKHVzZXJuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcXVlcnkgPSBgSU5TRVJUIElOVE8gdXNlcnMgKHVzZXJuYW1lLFxuICAgICAgZW1haWwsIHBhc3N3b3JkLCBhZGRyZXNzb25lLCBhZGRyZXNzdHdvLFxuICAgICAgY2l0eSwgc3RhdGUsIHppcCwgcGhvbmUsIGNjbnVtLCBleHBpcnksXG4gICAgICBjY3YsIGJpbGxpbmd6aXApIFZBTFVFUyAoJyR7dXNlcm5hbWV9JywgJyR7ZW1haWx9JywgJyR7cGFzc3dvcmR9JyxcbiAgICAgICcnLCAnJywgJycsICcnLCAnJywgJycsXG4gICAgICAnJywgJycsICcnLCAnJylgO1xuICAgICAgaW5zZXJ0Um93KHF1ZXJ5KVxuICAvLyB9IGVsc2UgaWYgKGFkZHJlc3NvbmUgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIHZhciBxdWVyeSA9IGBVUERBVEUgdXNlcnMgU0VUIGFkZHJlc3NvbmUgPSAnJHthZGRyZXNzb25lfScsIGFkZHJlc3N0d28gPSAnJHthZGRyZXNzdHdvfScsIGNpdHkgPSAnJHtjaXR5fScsIHN0YXRlID0gJyR7c3RhdGV9JywgemlwID0gJyR7emlwfScsIHBob25lID0gJyR7cGhvbmV9JyBXSEVSRSBMQVNUX0lOU0VSVF9JRCgpO2BcbiAgICAvLyBpbnNlcnRSb3cocXVlcnkpXG4gIC8vIH0gZWxzZSB7XG4gICAgLy8gdmFyIHF1ZXJ5ID0gYFVQREFURSB1c2VycyBTRVQgY2NudW0gPSAnJHtjY251bX0nLCBleHBpcnkgPSAnJHtleHBpcnl9JywgY2N2ID0gJyR7Y2N2fScsIGJpbGxpbmd6aXAgPSAnJHtiaWxsaW5nemlwfScgV0hFUkUgTEFTVF9JTlNFUlRfSUQoKTtgXG4gICAgLy8gaW5zZXJ0Um93KHF1ZXJ5KVxuICAvLyB9XG5cbiAgLy8gdmFyIGRhdGEgPSBuZXcgQnVmZmVyLmFsbG9jKDApO1xuICAvLyBjb25zb2xlLmxvZygnU3VjY2VzcyBzdWJtaXNzaW9uISEgJywgcmVxKVxuICAvLyByZXEub24oJ2RhdGEnLCBjaHVuayA9PiB7XG4gIC8vICAgZGF0YSA9IEJ1ZmZlci5jb25jYXQoW2RhdGEsIGNodW5rXSlcbiAgLy8gfSk7XG4gIC8vIHJlcS5vbignZW5kJywgKCkgPT4ge1xuICAvLyAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCkuc3BsaXQoJyAnKVxuICAvLyAgIGNvbnNvbGUubG9nKCdEQVRBISAnLCBkYXRhKTtcbiAgLy8gfSk7XG4gIHJlcy5zZXQoaGVhZGVycylcbiAgcmVzLnN0YXR1cygyMDApLmVuZCgpXG59KVxuXG5cblxuXG5cblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiBjb25zb2xlLmxvZyhgRXhhbXBsZSBhcHAgbGlzdGVuaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApKVxuXG5cbiJdfQ==
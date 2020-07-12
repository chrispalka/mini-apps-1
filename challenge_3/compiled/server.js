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
  // if (username !== undefined) {
  var query = `INSERT INTO users (username,
      email, password, addressone, addresstwo,
      city, state, zip, phone, ccnum, expiry,
      ccv, billingzip) VALUES ('${username}', '${email}', '${password}',
      '', '', '', '', '', '',
      '', '', '', '')`;
  insertRow(query);
  // // } else if (addressone !== undefined) {
  //   var query = `UPDATE users SET addressone = '${addressone}', addresstwo = '${addresstwo}', city = '${city}', state = '${state}', zip = '${zip}', phone = '${phone}' WHERE LAST_INSERT_ID();`
  //   insertRow(query)
  // // } else {
  //   var query = `UPDATE users SET ccnum = '${ccnum}', expiry = '${expiry}', ccv = '${ccv}', billingzip = '${billingzip}' WHERE LAST_INSERT_ID();`
  //   insertRow(query)
  // // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImhlYWRlcnMiLCJmcyIsInBhdGgiLCJhcHAiLCJwb3J0IiwibXVsdGVyIiwidXBsb2FkIiwiZGVzdCIsImluc2VydFJvdyIsInF1ZXJ5QWxsIiwidXNlIiwic3RhdGljIiwiam9pbiIsIl9fZGlybmFtZSIsImdldCIsInJlcSIsInJlcyIsInJlbmRlciIsInBvc3QiLCJub25lIiwidXNlcm5hbWUiLCJib2R5IiwiZW1haWwiLCJwYXNzd29yZCIsImFkZHJlc3NvbmUiLCJhZGRyZXNzdHdvIiwiY2l0eSIsInN0YXRlIiwiemlwIiwicGhvbmUiLCJjY251bSIsImV4cGlyeSIsImNjdiIsImJpbGxpbmd6aXAiLCJxdWVyeSIsInNldCIsInN0YXR1cyIsImVuZCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLE1BQU1DLFVBQVVELFFBQVEsYUFBUixDQUFoQjtBQUNBLE1BQU1FLEtBQUtGLFFBQVEsSUFBUixDQUFYO0FBQ0EsTUFBTUcsT0FBT0gsUUFBUSxNQUFSLENBQWI7QUFDQSxNQUFNSSxNQUFNTCxTQUFaO0FBQ0EsTUFBTU0sT0FBTyxJQUFiO0FBQ0EsTUFBTUMsU0FBVU4sUUFBUSxRQUFSLENBQWhCO0FBQ0EsTUFBTU8sU0FBU0QsT0FBTyxFQUFFRSxNQUFNLFVBQVIsRUFBUCxDQUFmO0FBQ0EsTUFBTSxFQUFFQyxTQUFGLEVBQWFDLFFBQWIsS0FBMEJWLFFBQVEsZUFBUixDQUFoQzs7QUFHQTtBQUNBSSxJQUFJTyxHQUFKLENBQVFaLFFBQVFhLE1BQVIsQ0FBZVQsS0FBS1UsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFFBQXJCLENBQWYsQ0FBUixFLENBQXlEO0FBQ3pEVixJQUFJTyxHQUFKLENBQVFaLFFBQVFhLE1BQVIsQ0FBZVQsS0FBS1UsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGNBQXJCLENBQWYsQ0FBUixFLENBQStEO0FBQy9EVixJQUFJTyxHQUFKLENBQVFaLFFBQVFhLE1BQVIsQ0FBZVQsS0FBS1UsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFFBQXJCLENBQWYsQ0FBUixFLENBQXlEO0FBQ3pEVixJQUFJTyxHQUFKLENBQVEsVUFBUixFQUFvQlosUUFBUWEsTUFBUixDQUFlVCxLQUFLVSxJQUFMLENBQVVDLFNBQVYsRUFBcUIsMkJBQXJCLENBQWYsQ0FBcEIsRSxDQUF3RjtBQUN4RlYsSUFBSU8sR0FBSixDQUFRLFVBQVIsRUFBb0JaLFFBQVFhLE1BQVIsQ0FBZVQsS0FBS1UsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLCtCQUFyQixDQUFmLENBQXBCLEUsQ0FBNEY7QUFDNUZWLElBQUlPLEdBQUosQ0FBUSxVQUFSLEVBQW9CWixRQUFRYSxNQUFSLENBQWVULEtBQUtVLElBQUwsQ0FBVUMsU0FBVixFQUFxQixnQkFBckIsQ0FBZixDQUFwQixFLENBQTZFO0FBQzdFVixJQUFJTyxHQUFKLENBQVEsU0FBUixFQUFtQlosUUFBUWEsTUFBUixDQUFlVCxLQUFLVSxJQUFMLENBQVVDLFNBQVYsRUFBcUIsbUNBQXJCLENBQWYsQ0FBbkIsRSxDQUErRjtBQUMvRlYsSUFBSU8sR0FBSixDQUFRLFNBQVIsRUFBbUJaLFFBQVFhLE1BQVIsQ0FBZVQsS0FBS1UsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFVBQXJCLENBQWYsQ0FBbkIsRSxDQUFzRTs7O0FBR3RFVixJQUFJVyxHQUFKLENBQVEsR0FBUixFQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCQSxNQUFJQyxNQUFKLENBQVcsT0FBWDtBQUNELENBRkQ7O0FBSUFkLElBQUllLElBQUosQ0FBUyxTQUFULEVBQW9CWixPQUFPYSxJQUFQLEVBQXBCLEVBQW1DLENBQUNKLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQy9DLE1BQUlJLFdBQVdMLElBQUlNLElBQUosQ0FBU0QsUUFBeEI7QUFDQSxNQUFJRSxRQUFRUCxJQUFJTSxJQUFKLENBQVNDLEtBQXJCO0FBQ0EsTUFBSUMsV0FBV1IsSUFBSU0sSUFBSixDQUFTRSxRQUF4QjtBQUNBLE1BQUlDLGFBQWFULElBQUlNLElBQUosQ0FBU0csVUFBMUI7QUFDQSxNQUFJQyxhQUFhVixJQUFJTSxJQUFKLENBQVNJLFVBQTFCO0FBQ0EsTUFBSUMsT0FBT1gsSUFBSU0sSUFBSixDQUFTSyxJQUFwQjtBQUNBLE1BQUlDLFFBQVFaLElBQUlNLElBQUosQ0FBU00sS0FBckI7QUFDQSxNQUFJQyxNQUFNYixJQUFJTSxJQUFKLENBQVNPLEdBQW5CO0FBQ0EsTUFBSUMsUUFBUWQsSUFBSU0sSUFBSixDQUFTUSxLQUFyQjtBQUNBLE1BQUlDLFFBQVFmLElBQUlNLElBQUosQ0FBU1MsS0FBckI7QUFDQSxNQUFJQyxTQUFTaEIsSUFBSU0sSUFBSixDQUFTVSxNQUF0QjtBQUNBLE1BQUlDLE1BQU1qQixJQUFJTSxJQUFKLENBQVNXLEdBQW5CO0FBQ0EsTUFBSUMsYUFBYWxCLElBQUlNLElBQUosQ0FBU1ksVUFBMUI7QUFDQTtBQUNFLE1BQUlDLFFBQVM7OztrQ0FHaUJkLFFBQVMsT0FBTUUsS0FBTSxPQUFNQyxRQUFTOztzQkFIbEU7QUFNRWYsWUFBVTBCLEtBQVY7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWxCLE1BQUltQixHQUFKLENBQVFuQyxPQUFSO0FBQ0FnQixNQUFJb0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0QsQ0F6Q0Q7O0FBZ0RBbEMsSUFBSW1DLE1BQUosQ0FBV2xDLElBQVgsRUFBaUIsTUFBTW1DLFFBQVFDLEdBQVIsQ0FBYSw2Q0FBNENwQyxJQUFLLEVBQTlELENBQXZCIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBoZWFkZXJzID0gcmVxdWlyZSgnLi9jb3JzLmpzb24nKTtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBwb3J0ID0gMzAwMDtcbmNvbnN0IG11bHRlciAgPSByZXF1aXJlKCdtdWx0ZXInKVxuY29uc3QgdXBsb2FkID0gbXVsdGVyKHsgZGVzdDogJ3VwbG9hZHMvJyB9KVxuY29uc3QgeyBpbnNlcnRSb3csIHF1ZXJ5QWxsIH0gPSByZXF1aXJlKCcuL2RiL2luZGV4LmpzJyk7XG5cblxuLy8gU2VydmUgZmlsZXMgdG8gY2xpZW50XG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKSkpOyAvLyBzZXJ2ZSBpbmRleC5odG1sXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdjb21waWxlZC9zcmMnKSkpOyAvLyBzZXJ2ZSB0cmFuc3BpbGVkIGFwcFxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnbW9kZWxzJykpKTsgLy8gc2VydmUgYXNzZXRzXG5hcHAudXNlKCcvc2NyaXB0cycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcvbm9kZV9tb2R1bGVzL3JlYWN0L2Rpc3QvJykpKTsgLy8gc2VydmUgcmVhY3RcbmFwcC51c2UoJy9zY3JpcHRzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Rpc3QvJykpKTsgLy8gc2VydmUgcmVhY3QtZG9tXG5hcHAudXNlKCcvc2NyaXB0cycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcvbm9kZV9tb2R1bGVzLycpKSk7IC8vIHNlcnZlIHJlYWN0LWRvbVxuYXBwLnVzZSgnL3N0eWxlcycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy8nKSkpOyAvLyBzZXJ2ZSBib290c3RyYXAgc3R5bGVzXG5hcHAudXNlKCcvc3R5bGVzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy9hc3NldHMvJykpKTsgLy8gc2VydmUgY3VzdG9tIHN0eWxlc1xuXG5cbmFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLnJlbmRlcignaW5kZXgnKTtcbn0pXG5cbmFwcC5wb3N0KCcvc3VibWl0JywgdXBsb2FkLm5vbmUoKSwgKHJlcSwgcmVzKSA9PiB7XG4gIHZhciB1c2VybmFtZSA9IHJlcS5ib2R5LnVzZXJuYW1lO1xuICB2YXIgZW1haWwgPSByZXEuYm9keS5lbWFpbDtcbiAgdmFyIHBhc3N3b3JkID0gcmVxLmJvZHkucGFzc3dvcmQ7XG4gIHZhciBhZGRyZXNzb25lID0gcmVxLmJvZHkuYWRkcmVzc29uZTtcbiAgdmFyIGFkZHJlc3N0d28gPSByZXEuYm9keS5hZGRyZXNzdHdvO1xuICB2YXIgY2l0eSA9IHJlcS5ib2R5LmNpdHk7XG4gIHZhciBzdGF0ZSA9IHJlcS5ib2R5LnN0YXRlO1xuICB2YXIgemlwID0gcmVxLmJvZHkuemlwO1xuICB2YXIgcGhvbmUgPSByZXEuYm9keS5waG9uZTtcbiAgdmFyIGNjbnVtID0gcmVxLmJvZHkuY2NudW07XG4gIHZhciBleHBpcnkgPSByZXEuYm9keS5leHBpcnk7XG4gIHZhciBjY3YgPSByZXEuYm9keS5jY3Y7XG4gIHZhciBiaWxsaW5nemlwID0gcmVxLmJvZHkuYmlsbGluZ3ppcDtcbiAgLy8gaWYgKHVzZXJuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcXVlcnkgPSBgSU5TRVJUIElOVE8gdXNlcnMgKHVzZXJuYW1lLFxuICAgICAgZW1haWwsIHBhc3N3b3JkLCBhZGRyZXNzb25lLCBhZGRyZXNzdHdvLFxuICAgICAgY2l0eSwgc3RhdGUsIHppcCwgcGhvbmUsIGNjbnVtLCBleHBpcnksXG4gICAgICBjY3YsIGJpbGxpbmd6aXApIFZBTFVFUyAoJyR7dXNlcm5hbWV9JywgJyR7ZW1haWx9JywgJyR7cGFzc3dvcmR9JyxcbiAgICAgICcnLCAnJywgJycsICcnLCAnJywgJycsXG4gICAgICAnJywgJycsICcnLCAnJylgO1xuICAgICAgaW5zZXJ0Um93KHF1ZXJ5KVxuICAvLyAvLyB9IGVsc2UgaWYgKGFkZHJlc3NvbmUgIT09IHVuZGVmaW5lZCkge1xuICAvLyAgIHZhciBxdWVyeSA9IGBVUERBVEUgdXNlcnMgU0VUIGFkZHJlc3NvbmUgPSAnJHthZGRyZXNzb25lfScsIGFkZHJlc3N0d28gPSAnJHthZGRyZXNzdHdvfScsIGNpdHkgPSAnJHtjaXR5fScsIHN0YXRlID0gJyR7c3RhdGV9JywgemlwID0gJyR7emlwfScsIHBob25lID0gJyR7cGhvbmV9JyBXSEVSRSBMQVNUX0lOU0VSVF9JRCgpO2BcbiAgLy8gICBpbnNlcnRSb3cocXVlcnkpXG4gIC8vIC8vIH0gZWxzZSB7XG4gIC8vICAgdmFyIHF1ZXJ5ID0gYFVQREFURSB1c2VycyBTRVQgY2NudW0gPSAnJHtjY251bX0nLCBleHBpcnkgPSAnJHtleHBpcnl9JywgY2N2ID0gJyR7Y2N2fScsIGJpbGxpbmd6aXAgPSAnJHtiaWxsaW5nemlwfScgV0hFUkUgTEFTVF9JTlNFUlRfSUQoKTtgXG4gIC8vICAgaW5zZXJ0Um93KHF1ZXJ5KVxuICAvLyAvLyB9XG5cbiAgLy8gdmFyIGRhdGEgPSBuZXcgQnVmZmVyLmFsbG9jKDApO1xuICAvLyBjb25zb2xlLmxvZygnU3VjY2VzcyBzdWJtaXNzaW9uISEgJywgcmVxKVxuICAvLyByZXEub24oJ2RhdGEnLCBjaHVuayA9PiB7XG4gIC8vICAgZGF0YSA9IEJ1ZmZlci5jb25jYXQoW2RhdGEsIGNodW5rXSlcbiAgLy8gfSk7XG4gIC8vIHJlcS5vbignZW5kJywgKCkgPT4ge1xuICAvLyAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCkuc3BsaXQoJyAnKVxuICAvLyAgIGNvbnNvbGUubG9nKCdEQVRBISAnLCBkYXRhKTtcbiAgLy8gfSk7XG4gIHJlcy5zZXQoaGVhZGVycylcbiAgcmVzLnN0YXR1cygyMDApLmVuZCgpXG59KVxuXG5cblxuXG5cblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiBjb25zb2xlLmxvZyhgRXhhbXBsZSBhcHAgbGlzdGVuaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApKVxuXG5cbiJdfQ==
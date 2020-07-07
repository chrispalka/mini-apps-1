const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const csvParser = require('./model/csvParse');

app.use(express.urlencoded({ extended: true }));

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/submit', (req, res, next) => {
  var data = JSON.parse(req.body.submittext);
  // res.write(data, 'HI')
  data = csvParser(data);
  // res.render('index', { data: data }, function (err, html) {
  //   if (err) {
  //     console.log('ERROR! ', err)
  //   } else {
  //     res.send(html);
  //   }
  // })
  res.render('submit', { data })
});

app.listen(port, () => console.log(`CSV-Report-Tool listening at http://localhost:${port}`));
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');
const headers = require('./cors')
const csvParser = require('./model/csvParse');
const _ = require('underscore')


app.use(express.urlencoded({ extended: true }));

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/submit', (req, res, next) => {
  var data = Buffer.alloc(0);

  req.on('data', (chunk) => {
    data = Buffer.concat([data, chunk]);
  })
  req.on('end', () => {
    // data = data.toString('utf8');
    fs.writeFile(path.join(__dirname, `/uploads/${_.uniqueId('json_')}.csv`), data, function(err) {
      if (err) {
        console.log('Error! ', err);
      } else {
        console.log('File written successfully');
      }
    });
    res.set(headers)
    // var final = Buffer.from(data, 'base64').toString('utf8');
    // console.log(final)
    res.render('submit', { data });
  });
  // console.log('data: ', file)
  // data = csvParser(data)
  // res.render('submit', { data });

  // var data = JSON.parse(req.file);

    // data = csvParser(data);
    // console.log(data)
    // res.render('submit', { data })


});

app.listen(port, () => console.log(`CSV-Report-Tool listening at http://localhost:${port}`));
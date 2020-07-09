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
    data = data.toString().split('\n').slice(4, -3)
    data.push('}')
    data = data.join('\n')
    data = JSON.parse(data);
    data = csvParser(data)
    fs.writeFile(path.join(__dirname, `/uploads/${_.uniqueId('json_')}.csv`), data, function(err) {
      if (err) {
        res.status(400);
        console.log('Error! ', err);
      } else {
        console.log('File written successfully');
      }
    });
    res.set(headers)
    // res.json(data)
    res.status(200).json({ data })
    // res.render('submit', { data })

  });

// next();
});

app.listen(port, () => console.log(`CSV-Report-Tool listening at http://localhost:${port}`));
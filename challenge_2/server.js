const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');
const csvParser = require('./model/csvParse');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })

app.use(express.urlencoded({ extended: true }));

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/submit', upload.single('json-report'), (req, res, next) => {
  console.log(req.file)
  var file = req.file.filename;
  fs.readFile(path.join(__dirname, `uploads/${file}`), 'utf8', function(err, data) {
    if (err) {
      console.log('Error reading file: ', err);
    } else {
      // data = JSON.parse(data);
      console.log(data);
      // csvParser(data);
      // res.render('submit', { data });
    }
  });

  // var data = JSON.parse(req.file);

    // data = csvParser(data);
    // console.log(data)
    // res.render('submit', { data })

  next();
});

app.listen(port, () => console.log(`CSV-Report-Tool listening at http://localhost:${port}`));
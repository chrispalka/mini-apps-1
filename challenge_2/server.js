const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const csvParser = require('./model/csvParse')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './client/index.html'))
)

app.post('/submit', (req, res, next) => {
  // console.log('REQUEST', req.body.submittext)
  var data = JSON.parse(req.body.submittext)
  // res.write(data, 'HI')
  data = csvParser(data);
  res.send(data)
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
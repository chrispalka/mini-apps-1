const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './client/index.html'))
)

app.post('/submit', (req, res, next) => {
  console.log('REQUEST', req.body.submittext)
  var data = req.body.submittext;
  // res.write(data, 'HI')
  res.end()
  // console.log('RESPONSE', res);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
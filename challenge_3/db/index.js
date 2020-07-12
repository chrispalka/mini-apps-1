const database = 'checkout';
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: database
});

var queryAll = function(callback) {
  connection.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.log(`Error querying ${database}: `, err.stack)
    } else {
      console.log('Query fulfilled!');
      connection.end();
    }
  });
};

var insertRow = function(query, callback) {
  connection.query(query, (err, result) => {
    if (err) {
      console.log(`Error querying ${database}: `, err.stack)
    } else {
      console.log('Query fulfilled!');
    }
  });
};

module.exports = {
  insertRow: insertRow,
  queryAll: queryAll
}


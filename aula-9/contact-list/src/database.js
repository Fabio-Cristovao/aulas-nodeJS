const mysql = require('mysql')

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'password',
   database: 'exercicio',
   multipleStatements: true
});

connection.connect((err) => {
   if (!err) {
      console.log('connected to database')
   } else {
      console.log('connection failed' + JSON.stringify(err, undefined, 2))
   }
});

module.exports = connection;
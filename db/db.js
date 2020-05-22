// set up mysql connection local

const mysql = require("mysql")

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Luckyusa1',
    database : 'practice'
})

connection.connect((err) => {
    if (err) throw err;
    console.log(' mysql Connected!');
})

module.exports = connection
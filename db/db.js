// set up mysql connection local

const mysql = require("mysql")

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Abhinav123',
    database : 'twe'
})

connection.connect((err) => {
    if (err) throw err;
    console.log(' mysql Connected!');
})

module.exports = connection
const mysql = require('mysql2'); // yarn add mysql2

require("dotenv").config(); // yarn add dotenv

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})

connection.query(
    'SELECT * FROM topic',
    function(err, results,fields ) {
        console.log(err);
        console.log(results); 
        console.log(fields); 
    }
)

/* node mysql/mysql2.js 명령어로 실행 */
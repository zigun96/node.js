const express = require("express"); //'express'가 일종의 서버
const mysql = require("mysql2");
const app = express();

require("dotenv").config(); // yarn add dotenv

app.get("/", function (req, res) {
  // request, response
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

  let body = "<h1>single row</h1>";
  connection.query(
    "SELECT * FROM topic WHERE id = 1",
    function (err, results, fields) {
      console.log(err);
      let row = results[0];
      body += row.title;
      res.send(body);
      console.log(results);
      console.log(fields);
    }
  );
});

app.listen(3000, function () {
  console.log(process.env);
  console.log("Listening: http://localhost:3000");
});

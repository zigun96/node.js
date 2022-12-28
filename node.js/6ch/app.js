// http 모듈
// const http = require('http');
// const port = process.env.PORT || 8080;

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Hello Node!</h1>');
//     res.end('<p>Hello Server!</p>');
//   })
//   .listen(port, () => {
//     console.log(`http://localhost:${port} 서버 대기중`);
//   });

// express
const express = require('express');
const port = process.env.PORT || 8081;
const app = express();

app
  .get('/', (req, res) => {
    res.send('<h1>Hello, Express</h1>');
  })
  .listen(port, () => {
    console.log(`http://localhost:${port} 서버 대기중`);
  });

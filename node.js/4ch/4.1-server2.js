const http = require('http');
const fs = require('fs').promises;
const contentType = 'text/html; charset=utf-8';
http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile('./server2.html');
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': contentType });
      res.end(err.message);
    }
  })
  .listen(8081, () => {
    console.log('http://localhost:8081 서버 대기중');
  });

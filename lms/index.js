const express = require('express');
const httpStatus = require('http-status');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(httpStatus.OK).json({ message: "Welcome to LMS application" });
});

app.get('/hello', (req, res) => {
  res.status(httpStatus.BAD_REQUEST).json({
    message: "Error has occured"
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
// const http = require('http');

// const server = http.createServer((res, req) => {
//   req.writeHead(200, {'Content-Type': 'text/html'});
//   req.write('<h1>Hello World</h1>');
//   req.end();
// });

// server.listen(5000, () => {
//   console.log('Server is running on port 5000');
// })
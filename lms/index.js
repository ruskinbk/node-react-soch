const express = require('express');
const app = express();

const routes = require('./routes');

app.use(express.json());

// app.get('/health', (req, res) => {
//   res.json({
//     status: 'ok',
//   });
// })
app.use('/api', routes);

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
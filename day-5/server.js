const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>HELLO</h1>');
  } else if (url.startsWith('/about')) {
    const query = url.split('?')[1];
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(query);
    res.end('<h1>About</h1>');
  } else if (url === '/json') {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end(JSON.stringify({ hi: "This is JSON" }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
  // res.end();
});

server.listen(5000, () => {
  console.log("Server listening to PORT 5000");
});
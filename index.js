const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
  } else if (req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>About Page</h1><p>Welcome to the About page!</p>');
  } else if (req.url === '/contact') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Contact Page</h1><p>Contact us at: info@example.com</p>');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

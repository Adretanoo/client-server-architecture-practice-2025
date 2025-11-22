const http = require('node:http');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname === '/hello' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Hello World!');
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not Found');
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
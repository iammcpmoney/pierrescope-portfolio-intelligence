const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const port = Number(process.env.PORT || 3210);
const assets = new Map([
  ['/', 'index.html'],
  ['/index.html', 'index.html'],
  ['/styles.css', 'styles.css'],
  ['/app.js', 'app.js'],
  ['/assets/pierrescope-one-pager.png', 'assets/pierrescope-one-pager.png']
]);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png'
};
http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD', 'X-Content-Type-Options': 'nosniff' });
    return res.end('Read-only showcase');
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); return res.end('Bad request'); }
  const asset = assets.get(pathname);
  if (!asset) { res.writeHead(404); return res.end('Not found'); }
  const file = path.join(root, asset);
  fs.readFile(file, (error, body) => {
    if (error) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, {
      'Content-Type': types[path.extname(file)],
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'no-referrer'
    });
    if (req.method === 'HEAD') return res.end();
    res.end(body);
  });
}).listen(port, '127.0.0.1', () => console.log('PierreScope local showcase: http://127.0.0.1:' + port + '/'));

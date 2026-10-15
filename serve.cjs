// Run: npm run dev, or npm run preview after npm run build.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const production = process.argv.includes('--dist');
const root = production ? path.join(__dirname,'dist') : __dirname;
const port = Number(process.env.PORT || 8767);
const base = process.env.BASE_PATH || '/';
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8',
  '.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg',
  '.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.woff2':'font/woff2',
  '.woff':'font/woff','.ttf':'font/ttf','.json':'application/json; charset=utf-8'};
http.createServer((req,res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname); }
  catch { res.writeHead(400); res.end(); return; }
  if (!pathname.startsWith(base)) { res.writeHead(404); res.end('Not found'); return; }
  pathname = '/' + pathname.slice(base.length);
  const entry = production ? '/index.html' : '/preview/index.html';
  const file = path.resolve(root, '.' + (pathname === '/' ? entry : pathname));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  fs.readFile(file,(error,data) => {
    if (error) { res.writeHead(404); res.end('Not found'); return; }
    const cssFont = /^css(?:2|\(\d+\))?$/.test(path.basename(file));
    res.writeHead(200, {'Content-Type':cssFont ? 'text/css; charset=utf-8' : types[path.extname(file)] || 'application/octet-stream',
      'Cache-Control':'no-store'});
    res.end(data);
  });
}).listen(port,'127.0.0.1',() => console.log(`Namoli preview: http://127.0.0.1:${port}${base}${production ? '' : 'preview/index.html'}`));

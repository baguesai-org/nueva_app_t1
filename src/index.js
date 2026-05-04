const http = require("http");

const PORT = process.env.PORT || 3100;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <h1>nueva_app_t1 funcionando</h1>
    <p>Deploy desde GitHub OK.</p>
  `);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Servidor escuchando en http://127.0.0.1:${PORT}`);
});

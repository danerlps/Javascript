// Importa o módulo http
const http = require("http");

const port = 3000;

// Cria o servidor
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  if (req.method === "GET" && req.url === "/") {
    res.end("Bem-vindo à rota principal!");
  } 
  else if (req.method === "GET" && req.url === "/sobre") {
    res.end("Esta é a página Sobre.");
  } 
  else if (req.method === "GET" && req.url.startsWith("/usuario/")) {
    const userId = req.url.split("/")[2]; // pega o ID depois de /usuario/
    res.end(`Você acessou o perfil do usuário com ID: ${userId}`);
  } 
  else if (req.method === "POST" && req.url === "/enviar") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      res.end(`Dados recebidos: ${body}`);
    });
  } 
  else {
    res.statusCode = 404;
    res.end("Rota não encontrada!");
  }
});

// Inicia o servidor
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

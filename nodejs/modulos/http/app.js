// Importa o módulo 'http' nativo do Node.js, que permite criar servidores HTTP.
const http = require('http');

// Cria um servidor HTTP que fica escutando por requisições.
// A função passada para createServer é executada toda vez que uma requisição é recebida.
// 'req' (request) contém informações sobre a requisição do cliente.
// 'res' (response) é usado para enviar uma resposta de volta ao cliente.
http.createServer((req, res) => {
  // Escreve o cabeçalho da resposta.
  // O status 200 significa que a requisição foi bem-sucedida (OK).
  // 'Content-Type': 'text/plain' informa ao navegador que a resposta é texto simples.
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Finaliza a resposta, enviando o texto 'Hello World\n' para o cliente.
  res.end('Hello World\n');
}).listen(8080); // Faz o servidor escutar por requisições na porta 8080.
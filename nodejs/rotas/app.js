import http from 'http';
const PORT = 3000;

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (url === '/') {
        response.statusCode = 200;
        response.end('<h1>Bem-vindo à página inicial!</h1>');

    } else if (url === '/sobre' && method === 'GET') {
        response.statusCode = 200;
        response.end('<h1>Sobre Nós</h1><p>Esta é a página sobre nós.</p>');

    } else if (url === '/contato') {
        response.statusCode = 200;
        response.end('<h1>Fale Conosco</h1>');

    } else if (url === '/fotos') {
        response.statusCode = 200;
        response.end('<img src="https://imgs.search.brave.com/6beP9DdOB8OiHVpZnKdVXVOdRfFhPMbwEODRCEJS1U0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM3Lm1lbWVkcm9p/ZC5jb20vaW1hZ2Vz/L1VQTE9BREVENTgz/LzYyZjY2MzhlMjJh/NWYuanBlZw" alt="Foto Exemplo">');
    
     } else {
        response.statusCode = 404;
        response.end('<h1>404 - Página Não Encontrada</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


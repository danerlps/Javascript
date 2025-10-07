import express from 'express';

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.setHeader("content-type", "text/html; charset=utf-8");
    next();
});

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to the Express Server!</h1>");
});

// Corrigido: rota sem espaço extra
app.get("/sobre", (req, res) => {
    res.status(200).send("<h1>Sobre</h1><p>Sobre nós.</p>");
});

app.get("/contato", (req, res) => {
    res.status(200).send("<h1>Contato</h1><p>Entre em contato conosco.</p>");
});     

app.get("/fotos", (req, res) => {
    res.status(200).send("<h1>Fotos</h1><p>Veja nossas fotos.</p>");
});

// Corrigido: /erro retorna 404
app.get("/erro", (req, res) => {
    res.status(404).send("<h1>Página não encontrada</h1>");
});

// Middleware para rotas não encontradas
app.use((req, res) => {
    res.status(404).send("<h1>Página não encontrada</h1>");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
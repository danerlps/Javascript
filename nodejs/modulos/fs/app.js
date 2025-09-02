// Importa o módulo 'fs' (File System) nativo do Node.js, que permite interagir com o sistema de arquivos.
const fs = require('fs');

// Lê o conteúdo do arquivo 'example.txt' de forma assíncrona.
// 'utf8' é a codificação do arquivo, para que o conteúdo seja retornado como uma string de texto.
// A função de callback (err, data) => { ... } é executada quando a leitura termina.
fs.readFile('example.txt', 'utf8', (err, data) => {
    // Verifica se ocorreu um erro durante a leitura do arquivo.
    if (err) {
        // Se houver um erro, exibe a mensagem de erro no console.
        console.error('erro ao ler o arquivo:', err);
        // Interrompe a execução da função de callback.
        return;
    }
    // Se a leitura for bem-sucedida, exibe o conteúdo do arquivo no console.
    console.log('conteúdo do arquivo:', data);
});

// Esta linha é executada imediatamente, sem esperar a leitura do arquivo terminar.
// Isso demonstra a natureza assíncrona (não bloqueante) da função readFile.
console.log('essa mensagem aparece');
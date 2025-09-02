const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('erro ao ler o arquivo:', err);
        return;
    }
    console.log('conteúdo do arquivo:', data);
});
console.log('essa mensagem aparece');
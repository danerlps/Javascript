// Importa o módulo 'os' (Operating System) nativo do Node.js, que fornece informações sobre o sistema operacional.
const os = require('os');
// Exibe no console a plataforma do sistema operacional em que o Node.js está sendo executado (ex: 'win32', 'linux').
console.log(os.platform());
// Exibe a arquitetura da CPU do sistema operacional (ex: 'x64').
console.log(os.arch());
// Exibe a quantidade de memória livre do sistema em bytes.
console.log(os.freemem());
// Exibe a quantidade total de memória do sistema em bytes.
console.log(os.totalmem());
// os.cpus() retorna um array de objetos com informações sobre cada núcleo da CPU.
// .length é usado para obter o número de núcleos e exibi-lo no console.
console.log(os.cpus().length);
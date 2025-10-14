document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    if (!nome || !telefone || !email) {
        document.getElementById('mensagem').textContent = 
            'Por favor, preencha todos os campos.';
        return;
    }

    document.getElementById('mensagem').textContent = 
        `Obrigado pelo envio! Seu telefone (${telefone}) foi registrado com sucesso.`;
});
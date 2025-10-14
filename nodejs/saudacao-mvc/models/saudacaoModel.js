module.exports = {
  gerarMensagemPersonalizada: (nome, idade, genero) => {
    let faixaEtaria;

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto";
    } else if (idade < 80) {
      faixaEtaria = "idoso";
    }
    else {
      faixaEtaria = "múmia pré-histórica";
    }

    let generoTexto = "";
    if (genero === "masculino") {
      generoTexto = "Bem-vindo";
    } else if (genero === "feminino") {
      generoTexto = "Bem-vinda";
    } else {
      generoTexto = "Bem-vinde";
    }

    return `${generoTexto}, ${nome}! Você é um(a) ${faixaEtaria} do gênero ${genero}.`;
  }
};

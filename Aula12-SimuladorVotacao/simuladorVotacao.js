console.clear();

const prompt = require("prompt-sync")();

let candidato1 = prompt("Digite o nome do candidato 1: ");
let candidato2 = prompt("Digite o nome do candidato 2: ");
let candidato3 = prompt("Digite o nome do candidato 3: ");

let c1 = 0;
let c2 = 0;
let c3 = 0;
let votoNulo = 0;
let votoBranco = 0;

do {
  let anoNascimento = parseInt(prompt("Qual seu ano de nascimento? "));

  function autorizaVoto(anoNascimento) {
    const anoAtual = new Date().getFullYear();

    if (anoAtual - anoNascimento < 16) {
      return "Negado";
    } else if (anoAtual - anoNascimento < 18) {
      return "Opcional";
    } else {
      return "Obrigatório";
    }
  }

  const autorizacao = autorizaVoto(anoNascimento);
  console.log(autorizacao);

  do {
    var voto = parseInt(prompt(`Digite seu voto: 1 - ${candidato1} | 2 - ${candidato2} | 3 - ${candidato3} | 4 - Voto Nulo | 5 - Voto em Branco | Seu voto: `));
  }while (voto < 1 || voto > 5)
  

  function votacao(autorizacao, voto) {
    if (autorizacao === "Negado") {
      return console.log("Você não pode votar");
    }

    if (voto == 1) {
      c1++;
    } else if (voto == 2) {
      c2++;
    } else if (voto == 3) {
      c3++;
    } else if (voto == 4) {
      votoNulo++;
    } else if (voto == 5) {
      votoBranco++;
    }
  }

  votacao(autorizacao, voto);

  var pessoasParaVotar = parseInt(
    prompt(
      `Existe mais alguém para votar? 1 - Sim 2 - Não | Resposta: `
    ).toLowerCase()
  );
} while (pessoasParaVotar == 1);

function exibirResultados() {
  return console.log(`
  O total de votos foi de:
  ${candidato1} - ${c1}
  ${candidato2} - ${c2}
  ${candidato3} - ${c3}
  Votos Nulos - ${votoNulo}
  Votos em Branco - ${votoBranco}
  `);
}

exibirResultados();

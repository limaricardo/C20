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
  let anoNascimento = parseInt(prompt("Qual o seu ano de nascimento? "));

  function autorizaVoto(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    if (idade < 16) {
      return "Negado";
    } else if (idade < 18 || idade > 60) {
      return "Opcional";
    } else {
      return "Obrigatorio";
    }
  }

  function votacao(autorizacao, voto) {
    if (autorizacao === "Negado") {
      return console.log("Você não pode votar");
    }

    voto = parseInt(
      prompt(
        `Digite seu voto: 1 - ${candidato1} | 2 - ${candidato2} | 3 - ${candidato3} | 4 - Voto em Branco | 5 - Voto Nulo | Seu voto foi: `
      )
    );

    if (voto == 1) {
      c1++;
    } else if (voto == 2) {
      c2++;
    } else if (voto == 3) {
      c3++;
    } else if (voto == 4) {
      votoBranco++;
    } else {
      votoNulo++;
    }
  }

  let voto;

  const autorizacao = autorizaVoto(anoNascimento);
  votacao(autorizacao, voto);

  var pessoasParaVotar = parseInt(
    prompt(`Existe mais alguém para votar? 1 - Sim | 2 - Não : `)
  );
} while (pessoasParaVotar == 1);

let eleito;

if (c1 > c2 && c1 > c3) {
  eleito = candidato1;
} else if (c2 > c1 && c2 > c3) {
  eleito = candidato2;
} else if (c3 > c1 && c3 > c2) {
  eleito = candidato3;
}

console.log(eleito);

function exibaResultados() {
  return console.log(`
  O total de votos foi de:
  ${candidato1} - ${c1}
  ${candidato2} - ${c2}
  ${candidato3} - ${c3}
  Voto em Branco - ${votoBranco}
  Voto nulo - ${votoNulo}
  O candidato eleito foi: ${eleito}
  `);
}

exibaResultados();

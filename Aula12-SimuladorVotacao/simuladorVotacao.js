console.clear();
const prompt = require("prompt-sync")();


let candidatos = [
  {
    nome: prompt("Digite o nome do candidato 1: "),
    votos: 0,
    idade: 50
  },
  {
    nome: prompt("Digite o nome do candidato 2: "),
    votos: 0,
    idade: 60
  },
  {
    nome: prompt("Digite o nome do candidato 3: "),
    votos: 0,
    idade: 40
  }
]

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
        `Digite seu voto: 1 - ${candidatos[0].nome} | 2 - ${candidatos[1].nome} | 3 - ${candidatos[2].nome} | 4 - Voto em Branco | 5 - Voto Nulo | Seu voto foi: `
      )
    );

    if (voto == 1) {
      candidatos[0].votos++;
    } else if (voto == 2) {
      candidatos[1].votos++;
    } else if (voto == 3) {
      candidatos[2].votos++;
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


const maiorVoto = Math.max(...candidatos.map( candidato => candidato.votos))
const maiorIdade = Math.max(...candidatos.map ( candidato => candidato.idade))


let eleito = '';
candidatos.map((candidato) => {
  if(candidato.votos === maiorVoto && candidato.idade === maiorIdade){
    eleito = candidato.nome;
  }
})


function exibaResultados() {
  return console.log(`
  O total de votos foi de:
  ${candidatos[0].nome} - ${candidatos[0].votos}
  ${candidatos[1].nome} - ${candidatos[1].votos}
  ${candidatos[2].nome} - ${candidatos[2].votos}
  Voto em Branco - ${votoBranco}
  Voto nulo - ${votoNulo}
  O candidato eleito foi: ${eleito}
  `);
}

exibaResultados();

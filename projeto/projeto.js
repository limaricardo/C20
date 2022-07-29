console.clear();
const prompt = require("prompt-sync")();

let continuar = true;

let dado = function (fator) {
  return Math.ceil(Math.random() * fator);
};

function menu(local) {
  console.log("Menu de ações: ");
  if (local == "planeta") {
    console.log("1 - Descansar");
    console.log("2 - Abastecer a nave");
    console.log("3 - Procurar tripulação");
    console.log("4 - Decolar para o espaço");
    console.log("5 - Mostrar status do heroi");
    console.log("6 - Mostrar status da nave");

    console.log();
    let escolha = prompt("Escolha sua ação: ");
    console.log(`
        -----
        `);

    if (escolha == 1) {
      console.clear();
      console.log("Quantas horas você quer descansar? ");
      let tempo = +prompt();
      heroi.passaTempo(tempo);
      heroi.mudaEnergia(tempo);
      heroi.mudaSaude(tempo / 2);
      console.log("...");
      console.log(`Você descansou ${tempo} horas.`);
      console.log(`Sua energia está em ${heroi.energia}`);
      console.log(`E sua saúde está em ${heroi.saude}`);
    } else if (escolha == 2) {
      console.clear();
      console.log(`Seu dinheiro: ${heroi.dinheiro}`);
      console.log(
        `Combustível da nave: ${nave.combustivel} / ${nave.maxCombustivel}`
      );
      console.log("Cada galão custa 5 Monteiros.");
      console.log("Quantos galões você quer abastecer?");
      let qtd = +prompt();

      if (heroi.verificaDinheiro(qtd * 5)) {
        heroi.mudaDinheiro(5 * qtd * -1);
        nave.abastecer(qtd);
        heroi.passaTempo(1);
        console.log("...");
        console.log("Você terminou de abastecer.");
      }

      console.log(`
            Dinheiro: ${heroi.dinheiro}
            Combustivel: ${nave.combustivel}`);
    } else if (escolha == 3) {
    } else if (escolha == 4) {
      nave.sairPlaneta();
    } else if (escolha == 5) {
      heroi.mostraStatus();
      heroi.mostraTempo();
    } else if (escolha == 6) {
      nave.mostraStatus();
      heroi.mostraTempo();
    } else if (escolha == "b") {
      return false;
    } else {
      console.log("Opção inválida!");
    }

    console.log();
    prompt("Pressione ENTER para continuar");
    console.clear();
  } else if (local == "espaco") {
    console.log("1 - Definir destino");
    console.log("2 - Procurar alvos para ataque");
    console.log("3 - Descansar");
    console.log("4 - Mostrar status do heroi");
    console.log("5 - Mostrar status da nave");

    console.log();
    let escolha = prompt("Escolha sua ação: ");
    console.log("------------------------");

    if (escolha == 1) {
      console.log("Para qual planeta você deseja ir? ");
      espaco.planetas.forEach((planeta, index) => {
        console.log(`${index + 1} - ${planeta.nome}`);
      });

      escolha = +prompt("Digite o número do planeta que deseja visitar: ");

      let planetaEscolhido = espaco.planetas[escolha - 1];

      if (planetaEscolhido.distancia == heroi.posicao) {
        console.log("Você já está nesse planeta! Escolha destino e defina outro planeta. ");
      } else {
        let calculoViagem = Math.abs(planetaEscolhido.distancia - heroi.posicao);

        if (nave.combustivel < calculoViagem) {
          console.log(
            "Você não tem combustível para viajar até este local. Abasteça a nave!"
          );
          console.log(
            "---------------------------------------------------------------------"
          );
        } else {
          const sorte = dado(10);

          if (sorte < 4) {
            console.log("Você foi atacado por outra nave!");

            const ataque = dado(15);
            const defesa = dado(15);
            const dano = ataque - defesa;

            if (dano > 0) {
              heroi.saude -= dano;
            } else if (heroi.saude < 1) {
              throw new Error("Game over!");
            }
            
          } else if (sorte < 6) {
            console.log(
              "Sua nave deu problema e você está vagando pelo espaço."
            );
          } else if (sorte <= 10) {
            console.log(
              `Você chega ao seu destino. Bem-vindo ao planeta ${planetaEscolhido.nome}`
            );
            nave.combustivel -= calculoViagem;
            heroi.posicao = planetaEscolhido.distancia;
            heroi.dinheiro += planetaEscolhido.distancia * 2;
            heroi.local = "planeta";
          }
        }
      }
    }

    if (escolha == 4) {
      heroi.mostraStatus();
      heroi.mostraTempo();
    }
  }

  return true;
}

let heroi = {
  nome: "Heroi",
  saude: 10,
  energia: 10,
  inteligencia: 5,
  dinheiro: 20,
  maxEnergia: 10,
  maxSaude: 10,
  tripulacao: ["Fox"],
  dia: 1,
  hora: 8,
  local: "planeta",
  posicao: 0,

  mostraStatus: function () {
    console.log(`
        Nome: ${this.nome}
        Saude: ${this.saude} / ${this.maxSaude}
        Energia: ${this.energia} / ${this.maxEnergia}
        Inteligencia: ${this.inteligencia}
        Dinheiro: ${this.dinheiro} Monteiros.
        Tripulação: ${this.tripulacao}`);
  },

  mostraTempo: function () {
    console.log(`
        Dia: ${this.dia}
        Hora: ${this.hora}`);
  },

  passaTempo: function (horas) {
    this.hora += horas;

    if (this.hora >= 24) {
      this.dia++;
      this.hora -= 24;
    }
  },

  mudaEnergia: function (qtd = 1) {
    this.energia += qtd;

    // Se a energia for maior que o máximo, ela se torna o máximo
    if (this.energia > this.maxEnergia) {
      this.energia = this.maxEnergia;
    }

    // Se a energia for menor que zero, ela se torna zero e toma 1 dano na saúde
    if (this.energia <= 0) {
      this.mudaSaude(-1);
      this.energia = 0;
    }
  },

  mudaSaude: function (qtd = 1) {
    this.saude += qtd;

    if (this.saude > this.maxSaude) {
      this.saude = this.maxSaude;
    }
  },

  mudaDinheiro: function (qtd) {
    this.dinheiro += qtd;
  },

  verificaDinheiro: function (mnt) {
    if (mnt > this.dinheiro) {
      console.log("Você não tem dinheiro para essa ação!");
      return false;
    } else {
      return true;
    }
  },
};

let nave = {
  nome: "Nautilus",
  velocidade: 6,
  resistencia: 6,
  combustivel: 5,
  maxCombustivel: 10,
  maxResistencia: 10,
  armas: ["Canhão de plasma"],

  mostraStatus: function () {
    console.log(`
        Nome: ${this.nome}
        Combustivel: ${this.combustivel} / ${this.maxCombustivel}
        Resistência: ${this.resistencia} / ${this.maxResistencia}
        Velocidade: ${this.velocidade}
        Armas: ${this.armas}`);
  },

  abastecer: function (qtd = 1) {
    this.combustivel += qtd;

    if (this.combustivel > this.maxCombustivel) {
      this.combustivel = this.maxCombustivel;
      console.log("Você desperdiçou combustível. Azar o seu.");
    }
  },

  sairPlaneta: function () {
    heroi.local = "espaco";
  },
};

const espaco = {
  planetas: [
    { nome: "Ceres", distancia: 10 },
    { nome: "Haumea", distancia: 3 },
    { nome: "Kepler", distancia: 6 },
    { nome: "Piscium", distancia: 1 },
  ],
};

console.log("Antes de começar a nossa aventura, qual o nome do nosso herói? ");
heroi.nome = prompt();

console.clear();

console.log(`
Nossa história começa em um planeta chamado Cassere.
Nosso herói parou para recrutar alguns piratas para a sua tripulação.
Ele conseguiu apenas Fox, um velho conhecido que estava a procura de um trabalho.
`);

prompt("Pressione enter");
console.clear();

console.log(`
A nave está com o combustível pela metade, é possível chegar a outro planeta se ele estiver próximo.
`);

while (continuar) {
  heroi.mostraTempo();
  console.log();
  continuar = menu(heroi.local);
}

console.clear();
console.log("Encerrando o jogo.");
console.log("Obrigado por jogar!!!");

console.log();

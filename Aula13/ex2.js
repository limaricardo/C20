console.clear();

const prompt = require('prompt-sync')();

const funcionarios = [];

function adicionarFuncionario() {
  const funcionario = {};
  funcionario.nome = prompt("Qual o nome do funcionário? ")
  funcionario.cargo = prompt("Qual o cargo do funcionário? ")
  funcionario.salario = parseInt(prompt("Qual o salário do funcionário? "))
  funcionarios.push(funcionario)
}

while(true) {
  adicionarFuncionario();
  const pergunta = +prompt("Deseja adicionar mais algum funcionário? 1 - Sim | 2 - Não : ")
  if(pergunta === 2){
    break
  }
}

function contarCargos(array, chave) {
  
  let arrayTemporario = []

  array.forEach((elementoArray) => {
    // Checar se há algum objeto no arrayTemporario que contenha chave e valor

    // array.some() testa se pelo menos um dos elementos no array passa no teste e retorna um booleano(true ou false)
    if(arrayTemporario.some((elementoArrayTemporario) => { return  elementoArrayTemporario[chave] == elementoArray[chave]})){
      arrayTemporario.forEach((elementoArrayTemporario) => {
        if(elementoArrayTemporario[chave] === elementoArray[chave]){
          elementoArrayTemporario["quantidade"]++
          elementoArrayTemporario["nomesOcorrencias"].push(elementoArray["nome"])
          console.log(elementoArray)
        }
      })
    } else {
      // Se não houver chave valor no array temporario, vamos inicializar uma nova chave
      // Com o atual valor de chave na iteração, e a quantidade vamos definir como 1
      let ocorrencias = {}
      ocorrencias["cargo"] = elementoArray[chave]
      ocorrencias["quantidade"] = 1
      ocorrencias["nomesOcorrencias"] = []
      ocorrencias["nomesOcorrencias"].push(elementoArray["nome"])
      arrayTemporario.push(ocorrencias)
    }
  })
  return arrayTemporario
}


let chave = "cargo"



console.log(funcionarios);

console.log(contarCargos(funcionarios, chave))


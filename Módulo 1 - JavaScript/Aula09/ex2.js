console.clear()
const prompt = require('prompt-sync')();

// Digitar um número para saber seu fatorial
let numero = +prompt("Digite o número para saber seu fatorial: ")

// Variável vai ser igual ao número, para utilizarmos número -1 no for
let fatorial = numero

// Checar se o usuário digita 0 ou 1, pois o resultado para as 2 condições é igual a 1
if (numero === 0 || numero === 1) {
  fatorial = 1;
  // Retornar o valor de fatorial igual a 1, de forma que não dê sequência no código
  return console.log(fatorial)
}

// Repetição para multiplicar o valor de fatorial pelo número -1
//     i = numero -1
// ex  i = 6 - 1 (Primeira repetição) - Primeiro fatorial será 6 * i (6 * 5)
for(let i = numero - 1; i >= 1; i--){
  fatorial *= i
}

console.log(fatorial)
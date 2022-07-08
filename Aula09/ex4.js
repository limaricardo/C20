console.clear()

// Definir um array com os modelos de carros
const modeloCarros = ["Astra", "Corolla", "Ka", "Argo", "Gol"]

// Definir um array com consumo de combustível dos carros
const autonomiaCarros = [10.7, 11.4, 15.5, 15.1, 10.7]

// Variável temporária para armazenar o primeiro valor do array para comparar depois
let temp = autonomiaCarros[0]

// Definimos a variável sendo igual a temp para ter o primeiro valor como maior antes de comparar o restante do array
let maiorAutonomia = temp


// Para cada VALOR no array de autonomiaCarros, checar se o valor é maior que da nossa variavel maiorAutonomia
for (let autonomia of autonomiaCarros){
  if (autonomia > maiorAutonomia){
    maiorAutonomia = autonomia
  }
}

// Definir o índice do maior valor no array autonomiaCarros
let indexMaiorAutonomia = autonomiaCarros.indexOf(maiorAutonomia)

console.log(`O carro que faz mais Km por litro é o: ${modeloCarros[indexMaiorAutonomia]}`)

// Imprimir o valor do consumo de combustível para 1000km e seu respectivo valor gasto para CADA MODELO DE CARRO.
for(let i = 0; i < autonomiaCarros.length; i++){
  let consumo = (1000 / autonomiaCarros[i]).toFixed(2)
  let gasto = (consumo * 5.50).toFixed(2)

  console.log(`O consumo do modelo ${modeloCarros[i]} para percorrer 1000km é de: ${consumo}`)
  console.log(`O gasto do model ${modeloCarros[i]} para percorrer 1000km é de: ${gasto} reais`)
}




console.clear();

function primeiraFuncao(parametro) {
  return new Promise((resolve, reject) => {
      console.log(`Essa é a primeira função, ela escreve: ${parametro}`);

      try{
        throw new Error("Deu erro")
        resolve(parametro);
      }catch{
        reject("Deu erro porque o professor não soube atualizar o banco.")
      }
      
  });
}

function segundaFuncao(parametro) {
  return new Promise((resolve, reject) => {
      const novoParametro = parametro + 10;

      console.log(`Essa vai adicionar 10, totalizando: ${novoParametro}`);

      resolve(novoParametro);
  });
}

primeiraFuncao(10)
    .then(segundaFuncao)
    .catch((reason) => console.log('Alguma coisa deu errada no caminho...', reason));

//PROMISE - PENDING, FULFILLED, REJECTED
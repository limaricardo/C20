async function funcaoAsync() {
  return 'Blue';
}

funcaoAsync().then(console.log);


// async function saudacao() {
//   const promise = new Promise(resolve => {
//     setTimeout(() => resolve('Olá!'), 1000);
//   });

//   const escrever = await promise;
//   console.log(escrever);
// }

// saudacao();

//------------------------------------------------------------


// async function erro() {
//   try {
//       await Promise.reject('Deu erro!');
//   } catch(e) {
//       console.log(e);
//   }
// }

// erro();

//--------------------------------------------------


// import fetch from "node-fetch"

// async function main() {
  
//   const footballResponse = await fetch('http://api.football-data.org/v4/competitions', {
//     headers: {
//       'X-Auth-Token': 'cadastrar no site para ter o token pessoal'
//     }
//   })
  
//   console.log(footballResponse)

//   const footballJson = await footballResponse.json();

//   console.log(footballJson)
// }

// main()


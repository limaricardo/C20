// function job() {
//   return new Promise(function(resolve, reject) {
//       reject();
//   });
// }

// let promise = job();


// promise

// .then(function() {
//   console.log('Success 1');
// })

// .then(function() {
//   console.log('Success 2');
// })

// .then(function() {
//   console.log('Success 3');
// })

// .catch(function() {
//   console.log('Error 1');
// })

// .then(function() {
//   console.log('Success 4');
// })

/* ------------------------------------------------------------------------------------ */


// function job(state) {
//   return new Promise(function(resolve, reject) {
//       if (state) {
//           resolve('success');
//       } else {
//           reject('error');
//       }
//   });
// }


// let promise = job(true);

// promise.then(function(data) {
//   console.log(data);
//   return job(false);
// })

// .catch(function(error) {
//   console.log(error);
//   return 'Error caught';
// })

// .then(function(data) {
//   console.log(data);

//   return job(true);
// })

// .catch(function(error) {
//   console.log(error);
// });

/* ---------------------------------------------------------- */

// function job(state) {
//   return new Promise(function(resolve, reject) {
//       if (state) {
//           resolve('success');
//       } else {
//           reject('error');
//       }
//   });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//   console.log(data);

//   return job(true);
// })

// .then(function(data) {
//   if (data !== 'victory') {
//       throw 'Defeat';
//   }

//   return job(true);
// })

// .then(function(data) {
//   console.log(data);
// })

// .catch(function(error) {
//   console.log(error);

//   return job(false);
// })

// .then(function(data) {
//   console.log(data);

//   return job(true);
// })

// .catch(function(error) {
//   console.log(error);

//   return 'Error caught';
// })

// .then(function(data) {
//   console.log(data);

//   return new Error('test');
// })

// .then(function(data) {
//   console.log('Success:', data.message);
// })

// .catch(function(data) {
//   console.log('Error:', data.message);
// });
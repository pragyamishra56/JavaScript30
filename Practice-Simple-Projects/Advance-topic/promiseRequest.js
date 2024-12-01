const promiseOne = new Promise(function (resolve, reject) {
  // do an async operation/task here
  // DB calls, cryptography , network requests, etc.

  setTimeout(function () {
    console.log('Async task is completed');
    resolve()
  }, 1000)
})

promiseOne.then(function() {
  console.log('Task is completed');
  console.log('Promise consumed ');
})

// <!-- Here we use the direct without containerize into variable -->
 new Promise (function (resolve, reject) {
  setTimeout(function() {
    console.log('Async 2 task is completed');
    resolve()
  } ,1000)
 })
 .then(function() {
  console.log('Async 2 resolved');
 });


 // 3rd promise 
 const promiseThree = new Promise(function (resolve, reject) {
  // do an async operation/task here
  setTimeout(function () {
    resolve({username: 'John', age: 30, email: 'john@example.com'});
  } , 1000)
 });

 promiseThree.then(function(user) {
  console.log(user);
 })


 // 4th promise
 const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function() {
    let error = false;
    if (!error) {
      resolve({username: 'Saitama', password: '123'})
    } else {
      reject('ERROR: Something went wrong')
    }
  }, 1000)
 })

 promiseFour 
 .then((user) => {
  console.log(user);
  return user.username
 }).then((username) => {
  console.log(username);
 }).catch(function(error) {
  console.log(error);
 }).finally(() => console.log('The promise is either resolved or rejected'));


//  5th promise using async/await and it will work the same as the previous one
// async function is a function that returns a promise
const promiseFive = new Promise(function(resolve, reject) {
  setTimeout( function() {
    let error = true;
    if (!error) {
      resolve({username: 'Saitama-JS', password: '123'})
    } else {
      reject('ERROR: JS went wrong')
    }
  } ,1000)
});

async function consumePromiseFive () {
  try { 
    const response = await promiseFive; // wait for the promise to resolve
    console.log(response)
  } catch (error) { // catch the error
    console.log(error);
  }
}

consumePromiseFive();


//  
async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUsers();


// 
fetch('https://jsonplaceholder.typicode.com/users') // returns a promise
.then((response) => { // first then 
  return response.json() // convert the response to json
}).then((data) => { // second then
  console.log(data); // log the data
}) // this is the end of the promise chain

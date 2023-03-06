// Today our main discussion is about Fetch API
// But this requires a discussion of Callbacks, Promises, Thenables & Async/Await

// Callbacks
// function firstFunction(parameters, callback) {
//     // do stuff
//     callback();
// }

// // AKA "callback hell"
// firstFunction(para, function () {
//     // do stuff
//     secondFunction(para, function () {
//         thirdFunction(para, function () {

//         });
//     });
// });

// Promise
// const myPromise = new Promise((resolve, reject) => {
//   const error = false;

//   if (!error) {
//     resolve("Yes! resolved the promise");
//   } else {
//     reject("No! rejected the promise");
//   }
// });

// console.log(myPromise);


// const users = fetch("https://jsonplaceholder.typicode.com/users");

// // pending
// console.log(users);

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((responssssse) => {
//         // console.log(response);
//         return responssssse.json();
//     })
//     .then((data) => {
//         console.log(data);
//         data.forEach((userrrr) => {
//             console.log(userrrr);
//         })
//     });


// Telusko Tutorial: CONSTRUCTOR

function Alien(name, tech) {
    this.name = name;
    this.tech = tech

    this.work = function() {
        console.log('Solving bugs from 12hrs')
    }
}

let alien1 = new Alien('Mont', 'JS');
let alien2 = new Alien('Navin', 'Python');

alien1.tech = 'React JS'

console.log(alien1);
console.log(alien2);
alien1.work()
alien2.work()
// Alien.work()
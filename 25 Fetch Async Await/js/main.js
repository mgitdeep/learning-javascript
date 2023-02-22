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
const myPromise = new Promise((resolve, reject) => {
    const error = false;

    if (!error) {
        resolve("Yes! resolved the promise");
    } else {
        reject("No! rejected the promise");
    }
})

console.log(myPromise);
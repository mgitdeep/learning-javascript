// Functions

//  Methods = Built-in functions

"Mondeep".toLowerCase();
Math.random();

//  Function Declaration Statement
// Form 1

// function sum() {
//     return 4 + 2;
// }

// console.log(sum());

// Form 2

// function sum(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(2, 7));


// Form 3

// function sum(num1, num2) {
//     if (num2 === undefined) {
//         return num1 + num1;
//     }
//     return num1 + num2;
// }

// console.log(sum(15));


// Form 4

// function getUserNameFromEmail(email) {
//     return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmail('mkalita09@gmail.com'));


// Form 5

// Anonymous function
// const getUserNameFromEmail = function (email) {
//     return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmail('dgray09@gmail.com'));


// Form 6

// Arrow function
// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmail('john@gmail.com'));


// Form 7 - constructing a brand new function

const toProperCase = (uName) => {
    // return uName.charAt(0).toUpperCase() + uName.charAt(1, uName.length).toLowerCase();     this won't work
    return uName.charAt(0).toUpperCase() + uName.slice(1).toLowerCase(); 
}

console.log(toProperCase("aman"));
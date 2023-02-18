// JavaScript Errors and Error Handling 

"use strict";

// variable = "MontX";
// console.log(variable);

// Object..create();

// const name = "Joe";
// name = "Dave";

// const makeError = () => {
//     try {
//         const name = "Joe";
//         name = "Dave";
//     } catch(err) {
//         console.log(err);
//         console.error(err);
//         console.warn(err);
//         console.table(err);

//         console.log(err.name);
//         console.log(err.message);
//         console.log(err.stack);
//     }
// }

// makeError();

// Creating a custom error

// const makeError = () => {
//     try {
//         throw new customError("This is a custom error!");
//     } catch(err) {
//         console.log(err.name);
//         console.log(err.message);
//         console.log(err.stack);
//     }
// }
// makeError();

// function customError(message) {
//     this.name = "CustomError";
//     this.message = message;
//     this.stack = `${this.name}: ${this.message}`;
// }

// Generic error 

// const makeError = () => {
//     try {
//         throw new Error("This is an error!");
//     } catch(err) {
//         console.log(err.name);
//         console.log(err.message);
//         console.log(err.stack);
// }
// makeError();


//  Finally block

const makeError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            if (i % 2 !== 0) {
                throw new Error("Odd number!");
            }
            console.log("Even number :)")
        } catch(err) {
            console.log(err.stack);
        } finally {
            console.log("...finally")

            i++;
        }
    }
    
}
makeError();
// LOOPS

// let myNumber = 50;
// while (myNumber < 50) {
//     // myNumber++;
//     myNumber += 1;
//     console.log(myNumber);
//     // myNumber = myNumber + 1;
//     // myNumber++;
// }

// do {
//     console.log(myNumber);
// } while (myNumber < 50);


// //  Suntax 1
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// // Syntax 2
// for (let i = 0; i < 10;) {
//     console.log(i);
//     i++;
// }


// // Syntax 3
// let x = 1;
// for (; x <= 10;) {
//     console.log(x);
//     x++;
// }


// Exercise 1
// let mName = "Mondeep";
// for (let i = 0; i < mName.length; i++) {
//     console.log(mName.charAt(i));
// }

// console.log(mName.length);


// Exercise 2
let mName = "Mondeep";
let counter = 0;
let myLetter;

while (true) {
    myLetter = mName[counter];
    console.log(myLetter);

    if (myLetter === "e") 
    break;
    counter++;

}
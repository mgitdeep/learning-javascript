// User Input

// alert("Hello World!");

// let myBoolen = confirm("Ok = True \nCancel = False");

// console.log(myBoolen);

// Basic
// let uName = prompt("Please enter your name: ");
// console.log(uName ?? "You didn't enter your name!");

// Intermediate
// let uName = prompt("Please enter your name: ");

// if (uName) {
//     console.log(uName);
// } else {
//     console.log("You didn't enter your name!")
// }

// High
let uName = prompt("Please enter your name: ");

if (uName) {
    console.log(uName.length);
    console.log(uName.trim().length);
    console.log(uName.trim());
} else {
    console.log("You didn't enter your name!");
}

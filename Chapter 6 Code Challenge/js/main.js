// Your first Code Challenge

// Write code that will return a random letter from your Name

// const myName = "Mondeep";
// const randNo = Math.floor(Math.random() * 7) + 0;
// // console.log(myName.charAt(Math.floor(Math.random() * 4) + 0));
// console.log(myName.charAt(randNo));

// console.log(randNo);


// // So we divided the problem into 2 parts:
// // How do we return a single character from a String = with charAt()
// // How to generate a random number to pass to the charAt() Method as an argument

// // The one liner answer is:
// console.log("Mondeep".charAt(Math.floor(Math.random() * 7)));


// Write code for ANY NAME

const anyName = "Mondeep";
const nameLenth = anyName.length;
const randNo = Math.floor(Math.random() * nameLenth);
// console.log(myName.length); - Just checking it
console.log(anyName.charAt(randNo));

// One liner code with one Variable

const anyName1 = "Mondeep";
console.log(anyName1.charAt(Math.floor(Math.random() * anyName.length)));
// // // Arrays
// // const myArray = [];

// // // Adding elements to an Array
// // myArray[0] = "Mondeep";
// // myArray[1] = 369;
// // myArray[2] = true;

// // // refer to an array
// // console.log(myArray);

// // // length property
// // console.log(myArray.length);

// // // last element in an array
// // console.log(myArray[myArray.length - 1]);
// // console.log(myArray[2]);

// // // pushing elements to array
// // myArray.push("College");
// // console.log(myArray);

// // // remove items from array
// // const popVar = myArray.pop();
// // console.log(popVar);

// // // adding element to front
// // myArray.unshift("Unshift", 78);
// // console.log(myArray);

// // // unshift gives new length of the array
// // const newLength = myArray.unshift("Unshift", 78);
// // console.log(newLength);

// // // shift removes element from front
// // const firstItem = myArray.shift();
// // console.log(myArray);
// // console.log(firstItem);

// // console.log(myArray);
// // console.log(myArray[0]);
// // console.log(myArray[1]);


// // // deleting items from any position gives "undefined"
// // delete myArray[1];
// // console.log(myArray);

// // // instead of "delete" use splice to remove specific number of items starting from a specific position:
// // myArray.splice(1, 1);
// // console.log(myArray);

// // // you can also Replace items with splice
// // myArray.splice(1, 1, "splice");
// // console.log(myArray);


// // commenting out all to start new code

// const myArray = ['A', 'B', 'C', 'D', 'E', 'F'];

// const newArray = myArray.slice(2, 5)

// console.log(newArray);

// console.log(myArray.reverse());

// const newString = myArray.join();
// console.log(newString);

// // creating a new array out of "newString"
// const newArray1 = newString.split(",");
// console.log(newArray1); 
// console.log(newArray1.reverse()); 

// // concat method & spread operator
// const myArrayA = ['A', 'B', 'C'];
// const myArrayB = ['D', 'E', 'F'];

// // const myNewArray = myArrayA.concat(myArrayB);
// const myNewArray = [...myArrayA, ...myArrayB];
// console.log(myNewArray);



// CTRL + A - commented out all at this point 

// restarting this Array topic once again 

// const myArray = ["A", 'B', 'C', 'D', 'E', 'F'];

// myArray.splice(1, 2, 'splice');
// myArray.splice(1, 0, 'splice');
// console.log(myArray);

// const newArray1 = myArray.slice(2);
// const newArray2 = myArray.slice(2, 4);
// console.log(newArray1);

// myArray.reverse();
// console.log(myArray.reverse());

// const newString = myArray.join();
// // console.log(newString);
// const newArray = newString.split(",");
// console.log(newArray);


const myArrayA = ["A", 'B', 'C'];
const myArrayB = ['D', 'E', 'F'];

// const newArray1 = myArrayA.concat(myArrayB);
// const newArray2 = myArrayA.concat(myArrayA);
// const newArray3 = myArrayB.concat(myArrayA);

// const newArray1 = [...myArrayA, ...myArrayB];
// const newArray2 = [...myArrayB, ...myArrayA];
// const newArray3 = [...myArrayA, ...myArrayA];
// const newArray4 = [...myArrayB, ...myArrayB];

// console.log(newArray3);

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShe1fB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1])
//or
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShe1fB];
const clothesDept = [clothesShelfA, clothesShelfB];

// here is the nested array
console. log(equipDept[0][1]);
console. log(clothesDept[1][0]);

const sportsStore = [ equipDept, clothesDept];

// 3 DIMENSIONAL array
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);

console.log(sportsStore);
// JavaScript Object Notation
/*
JSON is used to send and receive data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send & receive data in many languages
...not just in JavaScript.
*/

const myObj = {
    name: "Mondeep",
    hobbies: ['eat', 'sleep', 'code', 'repeat'],
    hello: function () {
        console.log("Hello!")
        // return "Helooo worrldss!!"
    }
}

console.log(myObj);

console.log(myObj.name);
// console.log(myObj.hello());

myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(JSON.name);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
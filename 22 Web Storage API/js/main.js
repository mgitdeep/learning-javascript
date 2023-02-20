// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to OS via the global variable: Window

// We do not have to type window. It is implied:

// window.alert(window.location);
// alert(location);


const myArray = ['eat', 'sleep', 'code'];
const myObject = {
    name: "Mondeep",
    hobbies: ['eat', 'sleep', 'code'],
    logName: function () {
        console.log(this.name);
    }
}

// console.log(myObject)
// myObject.logName();

localStorage.setItem("mySeesionStore", JSON.stringify(myArray));
// localStorage.removeItem("mySeesionStore")
// const key = localStorage.key(0);
const storeLength = localStorage.length;
const mySeesionData = JSON.parse(localStorage.getItem("mySeesionStore"));
// console.log(key);
console.log(storeLength);
// console.log(mySeesionData);
console.log(typeof mySeesionData);
// localStorage.removeItem("mySeesionStore")

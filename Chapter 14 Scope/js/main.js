// var, let & const

// var x = 1;
// var x = 2;

// console.log(x);


// var x = 1;
// x = 3;

// console.log(x);


// let x = 1;
// let x = 3;              will throw error

// console.log(x);


// let x = 1;
// x = 3;             

// console.log(x);


// const x = 1;               will throw error      
// const x = 4;             

// console.log(x);


// const x = 1;                will throw error
// x = 4;             

// console.log(x);


// Global Scope
var x = 1;
var y = 2;
const z = 3;

// Local Scope
{
    let y = 6;
    console.log(y)
}

// Local scope
function myFunc() {
    const z = 9;
    console.log(z);
}

console.log(z);
myFunc();
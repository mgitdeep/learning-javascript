// Numbers

// An integer is a whole number
const myNumber = 42;

console.log(myNumber);

// Floats
const myFloat = 42.0;
const myFloat1 = 42.03;

console.log(myFloat);
console.log(myFloat1);

const myString = "42";
console.log(myString);

console.log(myNumber === myFloat);
console.log(myNumber === myFloat1);
console.log(myNumber === myString);

console.log(Number(myString));
console.log(Number(myString) + 3);

// NaN
console.log(Number("Dave"));
console.log(Number(undefined));

console.log(Number(true));
console.log(Number(false));


// Number Methods
console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myFloat1));
console.log(Number.isInteger(myString));

// The Number.parseFloat() Method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN
const myString2 = "45.123abc";

console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myFloat1));
console.log(Number.parseFloat(myString2));

// toFixed() - This method returns String data, not integer data
console.log(Number.parseFloat(myString2).toFixed(2));
console.log(myFloat1.toFixed(1));

// Number.parseInt
console.log(Number.parseInt(myString2));

// toString Method
console.log(myNumber.toString());
console.log(myFloat1.toString());


// Number.isNaN() determines whether the passed value is NaN AND its type is number
console.log(Number.isNaN("Dave"));

// Global isNaN()
console.log(isNaN("Dave"));
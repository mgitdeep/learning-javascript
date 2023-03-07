// var _myName = "vinod";

// // console.log( '1' - '2' );
// // console.log( typeof('1' - '2'));

// let xYz = null;
// console.log(typeof(xYz));

// let num = 15;
// let newNum = ++num + 1;

// console.log(num);
// console.log(newNum);

// let a = 5;
// let b = 10;

// let c = b;
// b = a;
// a = c;

// console.log(a);
// console.log(b);

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a);
// console.log(b);

// debugger;
// let num1 = 3;
// let num2 = '3';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log( num1 == num2 );
// console.log( num1 === num2 );

// var area = "triangle" ;
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//   case 'circle': 
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }   

// var num=20;
// // block scope 

// while(num <= 10){
//   console.log(num); //infinte loop
//   num++;
// }

// do {
//     console.log(num); 
//     num++;
// } while(num <= 10);





// for ( i = 1; i <= 10; i++ ) {
//     let x = 9;
//     console.log(` ${x} * ${i} = `, x*i );
// }


// let finalSum = function (a, b) {
//     return total = a + b;
// }

// sum = finalSum(33, 99);
// console.log(sum);

// console.log(finalSum(1, 2));


// const sum = () => `the sum of the two number is ${(a=9)+(b=6)}`;

// console.log(sum());


// let myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];

// console.log(myFriends.length);

// for ( i = 0; i < myFriends.length; i++) {
//     console.log(myFriends[i]);
// }

// for ( let i in myFriends) {
//     console.log(myFriends[i]);
// }
// debugger
// for ( let i of myFriends) {
//     console.log(i);
// }

// let myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];

// myFriends.forEach(function(element, index, array) {
//     console.log(element);
//     console.log(index);
//     console.log(array);
// })
// myFriends.forEach((element, index, array) => {
//     console.log(element);
//     console.log(index);
//     console.log(array);
// })


// let myFriends = ['vinod', 'ramesh', 'arjun', 'vishal', 'arjun'];

// console.log(myFriends.lastIndexOf("arjun", 3));
// console.log(myFriends.lastIndexOf("arjun", 90));
// console.log(myFriends.lastIndexOf("Arjun", 4));

// let num = 15;
// let newNum = num++ + 1 + num++;		

// console.log(num);		
// console.log(newNum);

// let myFriends = ['vinod', 'ramesh', 'arjun', 'vishal', 'arjun'];

// myFriends.forEach(function callbackFunc(element, index, array) {
//     console.log(element);
//     console.log(index);
//     console.log(array);
// })

// console.log(myFriends.includes("ramesh", 3));

// const prices = [240, 330, 360, 420, 510, 600, 660, 900];

// // const findElem = prices.find((element) => element>500);

// const findElem = prices.findIndex((element) => element>500);

// console.log(findElem);

// const prices = [240, 330, 360, 420, 510, 600, 660, 900];

// const newPrice = prices.filter((element, index) => {
//     // return ("Here are the prices: ", element < 500);
//     // console.log("Here are the prices: ", element < 500)
//     return prices[element];
// });
// // console.log(element)
// console.log(newPrice);
// // newPrice();


// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

// console.log(months.sort());

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());


// const animals = ['pigs', 'goats', 'sheep'];

// animals.push('chicken');
// console.log(animals);

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// const firm = plants.pop()

// console.log(firm)
// console.log(plants)


// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const updateMonth = months.indexOf('march')

// if (updateMonth != -1) {
//     const newMonth = months.splice( updateMonth, 1, "March");
//     console.log(months);
// } else {
//     console.log('No such item')
// }



const array1 = [1, 4, 9, 16, 25];

const newArray = array1.map((element, index, array) => {
    return element > 9;
});

console.log(array1);
console.log(newArray);
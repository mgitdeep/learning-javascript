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



// const prices = [240, 330, 360, 420, 510, 600, 660, 900];

// const newPrice = prices.filter((element, index, array) => {
//     // return ("Here are the prices: ", element > 500);
//     console.log("Here are the prices: ", element > 500)
//     // console.log(element);
//     // console.log(index);
//     // console.log(array);
//     // return element > 500;
//     // console.log(element > 500);
// });

// console.log(newPrice);
// newPrice();
// console.log(newPrice);




// const array1 = [1, 4, 9, 16, 25];

// const newArray = array1.map((element, index, array) => {
//     // return element > 9;
    
//     // console.log(array);
//     // console.log(index);
//     return `${element} has index number: ${index} belongs to ${array}`;
// });

// // console.log(array1);
// console.log(newArray);



// let myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];

// const allF = myFriends.forEach(function(element, index, array) {
//     console.log(element);
//     console.log(index);
//     console.log(array);
//     return element, index;
// })

// console.log(allF)


// const prices = [240, 330, 360, 420, 510, 600, 660, 900];

// const newPrice = prices.filter((element, index, array) => {
//     // console.log(element);
//     // console.log(index);
//     // console.log(array);
//     return element > 500;
// });

// console.log(newPrice);


// const array1 = [1, 4, 9, 16, 25];

// const newArray = array1.map((element, index, array) => {
//     // console.log(element);
//     // console.log(index);
//     // console.log(array);
//     return element;
// });

// console.log(newArray);


// let arr = [25, 36, 49, 64, 81];

// // const sqrt = arr.forEach((curElm) => {
// //     console.log(Math.sqrt(curElm));
// // })

// // const sqrt = arr.filter((curElm) => {
// //     console.log(Math.sqrt(curElm));
// // })

// const sqrt = arr.map((curElm) => {
//     return Math.sqrt(curElm);
// })

// console.log(sqrt)


// Multiply each element by 2 and return only those elements which are greater than 10?

// let arr = [2, 3, 4, 6, 8];

// const mulArr = arr.map((curElm) => {
//     // console.log(curElm);
//     return curElm * 2;
// }).filter((elem) => {
//     // console.log(elem);
//     return elem > 10;
// })

// console.log(mulArr)


// let arr = [3, 6, 9];

// const addArr = arr.reduce((accumulator, curElm) => {
//     // debugger
//     return accumulator = accumulator + curElm;
// }, 9)

// console.log(addArr);

// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);

// let anySentence1 = 'We are the so-called "Vikings" from the north.'
// console.log(anySentence1);

// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.indexOf("t", 6));


// const myBioData =  'I am the thapa Technical';
// let sData = myBioData.search("Technical");
// console.log(sData);


// slice() extracts a part of a string and returns the extracted part 
// in a new string.

// The method takes 2 parameters: the start position, 
// and the end position (end not included).

// var str = "Apple, Bananaa, Kiwi, mango";

// let res = str.slice(0,4);
// let res = str.slice(7);
// console.log(res);


// The slice() method selects the elements starting at the 
// given start argument, and ends at, but does not include, 
// the given end argument.

// Note: The original array will not be changed.

// Display only 280 characters of a string like the 
// one used in Twitter?

// const str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi dolore veritatis culpa accusamus ullam quibusdam illo dolor debitis incidunt repellat error assumenda exercitationem qui aliquid quisquam, deserunt ab, adipisci minus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi dolore veritatis culpa accusamus ullam quibusdam illo dolor debitis incidunt repellat error assumenda exercitationem qui aliquid quisquam, deserunt ab, adipisci minus!" 

// // let strLim = str.charAt(280);
// // let strLim = str.indexOf('sit', 150);
// let strLim = str.slice(0, 280);

// console.log(strLim);
// console.log(strLim.length);


// substring() is similar to slice().

// The difference is that substring() cannot accept 
// negative indexes.

// var str = "Apple, Bananaa, Kiwi";
// let res = str.substring(8,-2);
// console.log(res);



// If we give negative value then the characters are
//  counted from the 0th pos 

// substr() is similar to slice().

// The difference is that the second parameter specifies the 
// length of the extracted part.


// var str = "Apple, Bananaa, Kiwi";
// // let res = str.substr(7,-2);
// let res = str.substr(-4);
// console.log(res);



// The replace() method replaces a specified value 
// with another value in a string.

// let myBioData = `I am vinod bahadur thapa vinod`;

// let repalceData = myBioData.replace('Vinod','VINOD');
// console.log(repalceData);
// console.log(myBioData);


// Points to remember 
// 1: The replace() method does not change the string 
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only 
// the first match
// 3:By default, the replace() method is case sensitive. 
// Writing VINOD (with upper-case) will not work


// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]



// The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a 
// specified index (position) in a string

// let str = "HELLO WORLD";

// console.log(str.charAt(9));



// The charCodeAt() method returns the unicode of the 
// character at a specified index in a string:

// The method returns a UTF-16 code
//  (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every 
// character, no matter the platform, device, application, 
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.



// var str = "HELLO WORLD";

// console.log( str.charCodeAt(0) );


// 😀12: challenge Time 🏁

// Return the Unicode of the last character in a string

// let str = "HELLO WORLD";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));


// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[1]);



// 👉  Other useful methods 

// let myName = "vinod tHapa";
// console.log(myName.toUpperCase()); 
// console.log(myName.toLowerCase());


// The concat() Method 
// concat() joins two or more strings

// let fName = "vinod"
// let lName = "thapa"

// console.log(fName + lName );
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName));


// String.trim()
// The trim() method removes whitespace from both 
// sides of a string

// var str = "              Hello         World!            ";
// console.log(str.trim());


// Converting a String to an Array
// A string can be converted to an array with the 
// split() method

// var txt = "a, b,c d,e";   // String
// console.log(txt.split(","));           // Split on commas
// console.log( txt.split(" "));          // Split on spaces
// console.log(txt.split("|"));         // Split on pipe


// JavaScript Date objects represent a single moment in time in a 
// platform-independent format. Date objects contain a Number 
// that represents milliseconds since 1 January 1970 UTC.

// Creating Date Objects
// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section 
// new Date(date string)


// new Date() 
// Date objects are created with the new Date() constructor.

// let currDate = new Date(); 
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString()); // 9/11/2019, 1:25:01 PM
// console.log(new Date().toString()); // Wed Sep 11 2019 13:25:01 GMT+0700 (GMT+07:00)


// Date.now()
// Returns the numeric value corresponding to the current time—the number 
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC


// console.log(Date.now());


// The DOM is the Document Object Model, which deals with the document, 
// the HTML elements themselves, e.g. document and all traversal you 
// would do in it, events, etc.

// For Ex: 👨‍🏫
// change the background color to red
// document.body.style.background = "red";


// The BOM is the Browser Object Model, which deals with browser components 
// aside from the document, like history, location, navigator and screen 
// (as well as some others that vary by browser). OR 
// In simple meaning all the Window operations which comes under BOM are performed 
// usign BOM 


// Let's see more practical on History object 

// Functions alert/confirm/prompt are also a part of BOM: 
// they are directly not related to the document, 
// but represent pure browser methods of communicating with the user.

// alert(location.href); // shows current URL
// if (confirm("Want to Visit ThapaTechnical?")) {
//   location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
// }



// Navigate through the DOM 

// 1: document.documentElement
//       returns the Element that is the root element of the document. 
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
//   list of the direct children only 
// 5: document.children (without text nodes, only regular Elements)
// 6: document.childNodes.length


// Practice Time 
// How to find the child in DOM tree 
// firstChild vs firstElementChild
// lastChild vs lastElementChild 
// const data = document.body.firstElementChild;
// undefined


// 4 ways of writing Events in JavaScript

// 1: using inline events alert();
// 2: By Calling a funcion (We already seen and most common way of writing) 
// 3: using Inline events (HTML onclick="" property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)

const thirdWay = document. getElementById('thirdway');
    thirdWay.onclick = function() {
        alert('most common way of writing functions again');
 }

 





// Objects: Key-Value pairs in Curly braces

// const myObj = { name: "Mondeep" };

// console.log(myObj.name);

// const anotherObj = {
//     alive: true,
//     answer: 42,
//     hobbies: ['eat', 'sleep', 'code', 'repeat'],
//     beverage: {
//         morning: 'coffee',
//         afternoon: 'iced tea'
//     },
//     action1: function () {
//         return "Hello World!"
//     },
//     action2: function () {
//         return `Time for ${this.beverage.morning}`
//     }
// };

// anotherObj.book = "Atomic Habits";

// console.log(anotherObj.hobbies);
// console.log(anotherObj.hobbies[2]);
// console.log(anotherObj.beverage);

// console.log(anotherObj["alive"]);
// console.log(anotherObj["beverage"].morning);
// console.log(anotherObj.beverage.morning);

// console.log(anotherObj.action1);         // this won't give "Hello World!" since () is not given so func was not called
// console.log(anotherObj.action1());

// console.log(anotherObj.action2())

// console.log(anotherObj);

// commneted out everything at this point


// const vehicle = {
//     wheels: 4,
//     engine: function () {
//         return "Vrroooomm!"
//     }
// };

// const truck = Object.create(vehicle);       // you can't left Blank inside the (), must inherit some previous object
// truck.doors = 2;

// console.log(truck);
// console.log(truck.engine());    // we can access 'engine' property due to Inheritance

// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function () { 
//     return "Whhooosh!" 
// };

// console.log(car.engine());

// commneted out everything at this point


// Example 3
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

// console.log(Object.keys(band));
// console.log(Object.values(band));

// for (let job in band) {
//     console.log(band[job]);
// }

// console.log(band["vocals"]);

// // console.log(job);           // this two code will give Reference error
// // console.log([job]);

// console.log("||||||||||||||||||||||||||")

// for (let i in band) {
//     console.log(`On ${i}, it's ${band[i]}!`)
// }

// delete band.drums;
// console.log(band.hasOwnProperty("drums"));

// again commenting all above

// ||| DESTRUCTURING OBJECTS

// const { guitar: myVariable, bass: myBass } = band;
// console.log(myVariable);
// console.log(myBass);

const { vocals, guitar, drums, bass} = band;
console.log(vocals);
console.log(drums);
console.log('|||||||||||||||');


function sings({ vocals }) {
    return `${vocals} sings!`
};
console.log(sings(band));
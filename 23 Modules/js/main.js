// Modules
// view1.style.display = "none";
// view2.style.display = "none";
// view3.style.display = "none";
// import playGuitar from "./guitars.js";
// import { shredding as shred, plucking as fingurepicking } from "./guitars.js";

// console.log(playGuitar());
// console.log(shred());
// console.log(fingurepicking());

import * as Guitars from "./guitars.js";

// console.log(Guitars.playGuitar());              - it won't work since it's set as DEFAULT in guitars.js
console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

import User from "./user.js";

// console.log(User.default("email@email.com", "Dave"));
const me = new User("email@email.com", "Mondeep");
console.log(me);
console.log(me.greetings());
// Conditionals: Switch statements

// // Syntax

// switch (expression or value) {

//     case choice1:
//         // run this code
//         break;

//     case choice2:
//         // run this different code
//         break;

//     // add as many cases as needed

//     default:
//         // run this code if no case matches
//         // no need for a Break here
// }

switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
        console.log(1);
        break;

    case 2:
        console.log(2);
        break;

    case 3:
        console.log(3);
        break;

    default:
        console.log("No match!");
}
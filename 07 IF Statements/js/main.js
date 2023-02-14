// Example 1

let customerIsBanned = false;
let soup = "Chicken noodle soup";
let crackers = true;
let reply;

if (customerIsBanned) {
    reply =  "No soup for you!";
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} & Crackers`;
} else if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = "Sorry we're out of Soup"
}

console.log(reply);


// Example 2

let testScore = 59;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D"
} else {
    // Nested IF statement
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F";
    }
}

console.log(grade);
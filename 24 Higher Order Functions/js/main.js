// Higher Order Functions

// A higher order function is a function that does at least one of the following:

// ** Takes one or more functions as an argument (parameter)
// ** Returns a function as the result

import { posts } from "./posts.js";

posts.forEach((post) => {
    console.log(post);
});


console.clear();

// 2nd HOF
const filteredPosts = posts.filter((post) => {
    return post.userId === 3;
});

console.log(filteredPosts);
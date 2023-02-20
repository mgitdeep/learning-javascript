// JavaScript Event Listeners

view1.style.display = "none";
view2.style.display = "flex";

// const view = document.querySelector("#view2");
// console.log(view);
// const div = view.querySelector("div");
// console.log(div);
// const h2 = div.querySelector("h2");
// console.log(h2);

// now we'll add a Event Listener
// Syntax: addEventListener(event, function, useCapture)

// const doSomething = () => {
//     alert("doing something!");
// };

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);

// // h2.addEventListener("click", (Event) => {
// //     console.log(Event.target);
// //     Event.target.textContent = "Clicked!";
// // })

// h2.addEventListener("click", function (Event) {
//     console.log(Event.target);
//     Event.target.textContent = "Clicked!";
// })

// Next example

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete!!")
        initApp();
    }
})

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        // event.stopPropagation();
        view.style.backgroundColor = "purple";
    }, false);

    div.addEventListener("click", (event) => {
        // event.stopPropagation();
        div.style.backgroundColor = "blue";
    }, false);

    h2.addEventListener("click", (event) => {
        // h2.style.backgroundColor = "gold";
        event.stopPropagation();
        event.target.textContent = "Clicked!";
    }, false);
}
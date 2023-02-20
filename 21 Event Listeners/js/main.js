// JavaScript Event Listeners

view1.style.display = "none";
view2.style.display = "flex";

const view = document.querySelector("#view2");
console.log(view);
const div = view.querySelector("div");
console.log(div);
const h2 = div.querySelector("h2");
console.log(h2);

// now we'll add a Event Listener
// Syntax: addEventListener(event, function, useCapture)

const doSomething = () => {
    alert("doing something!");
};

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (Event) => {
    console.log(Event.target);
    Event.target.textContent = "Clicked!";
})
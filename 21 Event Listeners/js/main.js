// JavaScript Event Listeners

view1.style.display = "none";
view2.style.display = "none";
view3.style.display = "flex";

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

// document.addEventListener("readystatechange", (event) => {
//     if (event.target.readyState === "complete") {
//         console.log("readyState: complete!!")
//         initApp();
//     }
// })

// const initApp = () => {
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");

//     // view.addEventListener("click", (event) => {
//     //     // event.stopPropagation();
//     //     view.style.backgroundColor = "purple";
//     // }, false);

//     // div.addEventListener("click", (event) => {
//     //     event.stopPropagation();
//     //     div.style.backgroundColor = "blue";
//     // }, false);

//     // h2.addEventListener("click", (event) => {
//     //     // h2.style.backgroundColor = "gold";
//     //     // event.stopPropagation();
//     //     event.target.textContent = "Clicked!";
//     // }, false);

//     view.addEventListener("click", (event) => {
//         view.classList.toggle("purple");
//         view.classList.toggle("darkblue");
//     }, false);

//     div.addEventListener("click", (event) => {
//         div.classList.toggle("blue");
//         div.classList.toggle("black");
//         // div.style.backgroundColor = "blue";                     
//         // div.style.backgroundColor = "purple";
//         // div.style.toggle.backgroundColor = "blue";                   TOGGLE won't work here!!
//         // div.style.toggle.backgroundColor = "purple";
//     }, false);

//     h2.addEventListener("click", (event) => {
//         const myText = event.target.textContent;
//         myText === "My 2nd view" ? (event.target.textContent = "Clicked") : (event.target.textContent = "My 2nd view");
//         // event.target.textContent = "Clicked!";
//         // event.target.textContent = "Again Clicked!";
//         // event.toggle.target.textContent = "Clicked!";                TOGGLE won't work here!!
//         // event.toggle.target.textContent = "Again Clicked!";
        
//     }, false);


    
//     const nav = document.querySelector("nav");
//     nav.addEventListener("mouseover", (event) => {
//         event.target.classList.add("height100");
//     });
//     nav.addEventListener("mouseout", (event) => {
//         event.target.classList.remove("height100")
//     });
// }



document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete!!")
        initApp();
    }
})

const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = document.querySelector("#myForm");

    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Submit event!!");
    })
}
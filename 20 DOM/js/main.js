// DOM - Document Object Model

const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);


view1.style.display = "flex";
view2.style.display = "flex";


const views = document.getElementsByClassName("view");
console.log(views);
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);


const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);


const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
const oddDivs = view1.querySelectorAll("div:nth-of-type(2n+1)");
console.log(oddDivs);
console.log(evenDivs.length);

for (let i = 0; i < evenDivs.length; i++) {
    console.log(i)
    evenDivs[i].style.backgroundColor = "gold";
    evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px";
}
// Javascript Classes

class Pizza {
    constructor() {
        this.size = "medium";
        this.crust = "original";
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.crust} crust Pizza!`)
    }
}

// console.log(Pizza);          This will give the entire code inside the class in output!
// console.log(Pizza.bake());   Uncaught TypeError: Pizza.bake is not a function!
// console.log(Pizza.bake);     Undefined!

const myPizza = new Pizza();
myPizza.bake();
// ways to create objects

let sym = Symbol("t1")

// 1. object literals 
// const car = {
//     "brand name": "Tesla",
//     model: "Model 3",
//     color: "Yellow",
//     [sym] : "tesla car",
//     start:function(){
//         console.log("Car Started!")
//     }
// }

//2. new Object()
const item = new Object()

item.name = "Laptop"
item.price = "700000"

console.log(item)

//3. Constructor Function

// function Phone(model, price){
//     this.model = model
//     this.price = price
// }

// const p1 = new Phone("Samsung",20000)

// const p2 = new Phone("Realme", 15000)

// console.log(p1)
// console.log(p2)

//4. ES6 Class

// class Animal{
//     constructor(type){
//         this.type = type
//     }
// }
// const a1 = new Animal("Dog")

// console.log(a1)


//Accessing object properties
// console.log(car.model)

// console.log(car["brand name"])
// console.log(car)

// console.log(car[sym])

// let symkey = Object.getOwnPropertySymbols(car)
// console.log(symkey)


//CRUD create read update delete


//add 
// car.price = 1300000

// console.log(car)

// //update 
// car.color = "Green"
// console.log(car)


// //delete

// delete car.price

// console.log(car)


//Object methods

// 1. Object.keys(obj)
// console.log(Object.keys(car))

//2. Object.values(obj)
// console.log(Object.values(car))

//3. Object.entries(obj)
// console.log(Object.entries(car))

//4. Object.assign(target , source)

// let carCopy = Object.assign({},car)

// console.log(carCopy) //shallow copy 

// let carCopy = car;
// console.log(carCopy)


// carCopy.color = "pink"
// console.log(car)

///5. object.freeze(obj)

const car = {
    "brand name": "Tesla",
    model: "Model 3",
    color: "Yellow",
    [sym] : "tesla Car",
    start:function(){
        console.log("Car Started!")
    }
}

// car.color = "blue"
// console.log(car)

// Object.freeze(car)

// car.color = "Red"
// console.log(car)

//6. Object.seal(obj)

// Object.seal(car)

// car.color = "Red"
// car.price = 1234
// console.log(car)

//7. Object.hasOwn(obj, property)

// console.log(Object.hasOwn(car, "speed"))
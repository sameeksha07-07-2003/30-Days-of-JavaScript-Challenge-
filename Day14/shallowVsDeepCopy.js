//normal
let employee = {
    name : "Yash",
    age: 20,
    role: "Developer",
    skills:{
        primary: "JavaScript",
        secondary: "Cpp"
    }
}

// let copy = employee;

// copy.age = 16;
// console.log(employee);


//shallow copy
// 1. spread operator
// let copy = {...employee}


//2. Object.assign()
// let copy = Object.assign({}, employee)

// copy.age = 18
// copy.skills.primary = "Java"
// console.log(copy)
// console.log(employee)

/// Deep copy
//Using JSON
let product = {
    title : "Laptop",
    details : {
        brand:"Dell",
        ram:"16GB",
        Drive:{
            primary: "C-Drive"
        }
    }
}

// let copy =  JSON.parse(JSON.stringify(product))

// copy.title = "Computer"
// copy.details.ram = "32GB"
// copy.details.Drive.primary = "D-drive"

// console.log(copy)
// console.log(product)


// function deepCopy(obj){
//     if(obj == null || typeof obj !== "object")return obj;

//     let copy = Array.isArray(obj)? []: {};

//     for(let key in obj){
//         copy[key] = deepCopy(obj[key]);
//     }

//     return copy;
// }

// let copy = deepCopy(product)

// copy.title = "Computer"
// copy.details.ram = "32GB"
// copy.details.Drive.primary = "D-drive"

// console.log(copy)
// console.log(product)


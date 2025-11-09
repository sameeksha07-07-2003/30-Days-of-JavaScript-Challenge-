let person = {
    name: "Yash",
    age : 19,
    greet: function(){
        console.log("Hello " + this.name);
    }
}

// let person2 = {
//     name: "Sam",
//     age: 21,
//     greet: person.greet
// }

// person.greet()

// person2.greet();


//looping in objects
//for in
// for(let key in person){
//     console.log(key+":"+ person[key])
// }
//for of
// for(let key of Object.keys(person)){
//     console.log(key + " : "+ person[key]);
// }

//nested object
let student = {
    name : "Yash",
    marks : {
        maths: 87,
        Science: 78,
        Hindi : 94,
        English : 89
    }
}

console.log(student.marks.Hindi)


//comparing objects
//obj are compared by reference not by value

// let a = {name : "Sam"}
// let b = a

// console.log(a === b)

//Destructuring
// let user = {
//     name : "Ram",
//     age : 18,
//     city: "Delhi"
// }

// let {name , age} = user;

// console.log(name)

// let {name : userName , age: userAge} = user;

// console.log(userName)


//Array Destructuring
// let arr  = [17,7,1,13,1,3]

// let [a, b] = arr;

// console.log(a)
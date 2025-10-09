"use strict"

//primitive data types (Immutable)

//1. Number (8 bytes)
let a = 10;
console.log(typeof a)
console.log(typeof(a))

//2. String 
let str = "Sameeksha"
console.log(typeof str);

//3. Boolean
let isValid  = true;
console.log(typeof isValid);

//4. Undefined
let employeeId;
console.log(typeof employeeId)

//5. NULL
let empty = null;
console.log(typeof empty)

//6. BigInt 
let num = 36487139103483919328781798351403249816n;
console.log(typeof num)

//7. Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);

//Non Primitive Data types (mutable)
//1. array
// let arr =  [18 , 17 , "Yash", true, 121349, 5.7]
// console.log(arr)
// console.log(typeof arr)

//2. object
// "yash" 17 30571601 "obc" true
// let user = {
//     name: "Yash",
//     age: 17,
//     accountNo: 30571601,
//     category: "obc",
//     isValidUser: true
// }

// console.log(user)
// console.log(typeof user)
// console.log(user.accountNo)

// 3. function
// let funValue = function add(){
//     console.log(1+7)
// }

// console.log(funValue())
// console.log(typeof funValue)


//Immutable vs mutable

// let n = 10 ;
// n = 20;
// console.log(n);


// let s = "Yash"

// s[1] = "z";

// console.log(s[1])

//mutable  - Non primitive data types
// let arr =  [18 , 17 , "Yash", true, 121349, 5.7]
// console.log(arr[4])
// arr[4] = "Sam"
// console.log(arr[4])

let user = {
    name: "Yash",
    age: 17,
    accountNo: 30571601,
    category: "obc",
    isValidUser: true
}

user = {
    name: "Ram",
    age: 12,
    accountNo: 984345,
    category: "obc",
    isValidUser: true
}
// user.age = 19
console.log(user)
// console.log(typeof user)
// console.log(user.accountNo)
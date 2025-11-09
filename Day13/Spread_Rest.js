// (... )syntax of spread and rest is same but there functiona and use is different 

// spread - to expand Element
//Rest - collect remaining values


// 1. copy an Array
let arr1 = [1,2,3]
let arr2 = [17 , ...arr1]

// console.log(arr2);

//2. Merge two arrays

// let a  = [1,2,3,5]
// let b  = [8,9,7,6]

// let  c = [...a , ...b]  //[1,2,3,5,8,9,7,6]


// console.log(c)

//3. Add extra element
// let a  = [1,2,3,5]
// let ans = [8,9,...a, 7,6]

// console.log(ans)


//4. copy an object
// let user = {name : "Yash", age : 20}
// //shallow copy is created 
// let copy = {...user} // actual copy 


// copy.age = 18
// console.log(copy)
// console.log(user)


//Rest operator
function sum( a, b ,...num ){
    console.log(num)
    console.log("sum");
}

sum(20,34,56,9,5,6,7,8)


//array destructuring 
let arr = [3,13,4,56,7,6,79,78,7]

let [a, b, ...rest]= arr;

console.log(rest)

//object destructuring
// let user = {
//     name : "yash",
//     age : 20 ,
//     city: "Delhi"
// }

// let {name: userName, ...info} = user;
// console.log(info)

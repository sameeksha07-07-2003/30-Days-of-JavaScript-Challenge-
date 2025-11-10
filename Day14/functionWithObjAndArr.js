///obj as parameter

// function printStudent(student){
//     for(let key in student){
//         console.log(`${key} - ${student[key]}`)
//     }
// }

// let student = {
//     name : "Yash",
//     age : 18,
//     city: "Mumbai"
// }

// printStudent(student)

//function return obj

// function createUser(name , age){
//     return {
//         username : name,
//         userAge :age 
//     }
// }

// let obj = createUser("Yash", 20)
// console.log(obj)
// let obj3 = createUser("Sam", 23)
// console.log(obj3)

//array as arugument

// function sumArray(numbers){
//     let sum = 0;
//     for(let num of numbers){
//         sum += num;
//     }

//     return sum;
// }

// let numbers = [3,4,56,7]

// let ans = sumArray(numbers)
// console.log(ans)

// funtion returning array
// function filterEven(arr){
//     let even = [];
//     for(let num of arr){
//         if(num %2 ==0){
//             even.push(num);

//         }
//     }

//     return even;
// }
// let arr = [3,4,5,2,24,6,7]
// let evenNo = filterEven(arr);

// console.log(evenNo)

// // array of objects [{}{}{}]
function printNames(users){
    for(let user of users){
        console.log(user.name)
    }
}

let users = [
    {name:"yash", age: 23},
     {name:"ram", age: 23},
      {name:"sarthak", age: 23}
]

printNames(users)

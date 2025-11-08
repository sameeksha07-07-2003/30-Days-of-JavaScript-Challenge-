
//1. Creation of Array
//1. using square brackets {most common}
// let arr = [18,6,7,1,13,17]
// let fruits = ["orange","Mango","Banana","Kiwi"]
// let mixed = [17,"Hello",true,13.71]

// console.log(arr)
// console.log(fruits)
// console.log(mixed)

//2. Array constructor
// let colors = new Array("red","green","yellow","blue")
// console.log(colors)

//3.Array.of()
// let colors =  Array.of("red","green","yellow","blue")
// console.log(colors)

//4.Array.from()
// let str = "Hello"
// let arr = Array.from(str);
// console.log(arr)

//Acessing & Modifying Arrays elements 
// let fruits = ["orange","Mango","Banana","Kiwi"] //0 to 3
// console.log(fruits.length)

// console.log(fruits[1])

// fruits[3] =  "Apple"

// console.log(fruits)

// console.log(fruits[5])

//Traversing in Array

// let fruits = ["orange","Mango","Banana","Kiwi"] 
// 1.for loop

// for(let i = 0 ; i<fruits.length ; i++){
//     console.log(fruits[i])
// }

// // 2. forof loop
// let nums = [2,4,7,8]

// for(let num of nums){
//     console.log(2*num)
// }

//3. forin loop
// let colors =  Array.of("red","green","yellow","blue")
// for(let index in colors){
//     console.log(colors[index])
// }

//forEach()

// array.forEach(function(currValue, index, array){
//     //code 
// })

// array.forEach((currValue,index,array)=>{
//     //code
// })


// let fruits = ["orange","Mango","Banana","Kiwi"] 

// fruits.forEach(function(fruit,index){
//     console.log(`${fruit} at index ${index}` )
// })

// fruits.forEach((fruit,index)=>console.log(`${fruit} at index ${index}` ))

// fruits.forEach(fruit=>console.log(`${fruit} `))


// let nums = [2,4,6,8,9,7]

// nums.forEach((num,index,nums)=>{
//     nums[index] = num*2
// })

// console.log(nums)

//Map()
//syntax
// array.map((currentValue, index, array)=>{
//     //return new value
// })


// let nums  = [2,4,5,6,3,1]

// const newArr = nums.map(num => num*2)

// console.log(newArr)
// console.log(nums)


//filter()  /// return new array 
// array.filter((currentValue , index , array)=>{
//     //code
// })

// const numbers = [2,4,63,8,3,5]

// const even = numbers.filter((num) =>{
//     return num % 2 === 0
// })

// console.log(even)

//reduce() => array to single value

// array.reduce((accumulate, currentValue , index , array)=>{
//     //code
//     //return upadatedAccumulator
// },intialValue)

//sum of all numbers 
// let numbers = [2,3,4,7]

// const sum = numbers.reduce((acc, num)=> acc+num,0)

// console.log(sum)

// const mul = numbers.reduce((acc,num)=>acc*num,1)
// console.log(mul)


//channing Map, filter and reduce
//[2,4,7,8,5] => [2,4,8] => [4,8,16] => 28
// const nums = [2,4,7,8,5];
// const result = nums.filter(num=> num%2 === 0).map((num)=>num*2).reduce((acc,num)=>acc+num,0)

// console.log(result)

//Basic methods of Array

//1. indexOf(elm)
let fruits = ["orange","Mango","Banana","Kiwi","Mango"] 

// console.log(fruits.indexOf("Mango"))

// console.log(fruits.indexOf("Grapes"))

//2. LastIndexOf(elm)
// console.log(fruits.lastIndexOf("Mango"))
// console.log(fruits.lastIndexOf("Grapes"))

//3. includes() 
console.log(fruits.includes("Grapes"))
console.log(fruits.includes("Mango"))

//4. push()
fruits.push("Grapes")
console.log(fruits)

//5.pop()
fruits.pop()
console.log(fruits)

//6. unshift()
fruits.unshift("grapes")
console.log(fruits)

//7. shift()
fruits.shift();
console.log(fruits)

//8. concat()
//2 or more arrays -> join // return new array

// let num1 = [4,5,62,3,8]
// let num2 = [5,9,7,6,1,17]

// let newArr = num1.concat(num2)

// console.log(newArr)

//9. slice(start , end) // end -> excluded

// console.log(fruits.slice(1,4))


//11. join //array to string

// console.log(fruits.join(", "))

//12. reverse() // modifies original array

// let num = [6,5,3,1]

// num.reverse()

// console.log(num)

//13. sort()// modifies original array
// fruits.sort()
// console.log(fruits)
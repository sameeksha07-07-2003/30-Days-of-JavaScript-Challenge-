//Type Conversion (Explicit Conversion):
//1. String Conversion - String()

//number to string
// let num = 123
// let str = String(num)
// console.log(typeof num)
// console.log(typeof str)

//boolean to string
// let bool = true;
// console.log(typeof bool)
// console.log(typeof String(bool))

//2. Number Conversion - Number()
// string to number
let str1 = "1234abc"
console.log(typeof str1)
console.log(Number(str1))
console.log(typeof Number(str1))

//boolean to number
console.log(Number(true))
console.log(Number(false))

//null to number
console.log(Number(null))

//undefined to number
console.log(Number(undefined))

// "123" -> 123 , true -> 1 , false -> 0, null -> 0, undefined -> NaN

//3. Boolean conversion - Boolean()
console.log(Boolean(1))

console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))

console.log(Boolean("hello"))

// 0  , "" , null , undefined, NaN-> false
// 1 -> true and remaning things also gives true


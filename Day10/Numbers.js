let a = 10
let b = 23.454
let c = 1e3 // 1000
let d = 0xff //255

// console.log(typeof d)

// 1/0 -> infinity
// console.log(1/0)

// console.log(-11/0)
// console.log("abc"/0)


//Number properties
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.NaN)

///NUmber Methods
//1. Number()
console.log(Number("abc"))
console.log(Number("23.456"))
console.log(Number("100"))
console.log(Number("230abc"))

//2. parseInt()
console.log(parseInt("abc"))
console.log(parseInt("23.456"))
console.log(parseInt("100"))
console.log(parseInt("230abc"))

//3. parseFloat()
console.log(parseFloat("abc"))
console.log(parseFloat("23.456"))
console.log(parseFloat("100"))
console.log(parseFloat("230.678abc"))

//isNaN()
console.log(Number.isNaN("abc"))
console.log(isNaN("23.456"))
console.log(isNaN("100"))
console.log(isNaN("230.678abc"))

//4. isFinite()
console.log(isFinite(233433))

//5. toString()
let num = 23.4545
console.log(num.toString())

//6. toFixed(n)
console.log(num.toFixed(2))

//7. toPrecision(n)
let num2 = 1234.7
console.log(num.toPrecision(4))
console.log(num2.toPrecision(4))

//8. valueof()
console.log(num.valueOf())

//9. Number.isInteger(value)
console.log(Number.isInteger(23))
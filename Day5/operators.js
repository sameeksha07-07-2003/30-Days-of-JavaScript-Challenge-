//JavaScript Operators
//1. Arithmetic operator (Mathematical Operation)
//+ , - , * , / , % , **, ++ , --
// console.log(1+7)
// console.log(6-2)
// console.log(6*2)
// console.log(6/2)
// console.log(14%3)
// console.log(6**3)

//postfix
let x = 8;

console.log(x++) //increment
console.log(x--) // decrement

//prefix
console.log(++x); // increment
console.log(--x); //decrement

//2. Assignment operator
// += , -= , *= , /= , %= , 
let y = 10 ;
y += 7  // y = y + 7
console.log(y)

y -= 7 // y = y - 7
console.log(y)

y *= 7 // y = y * 7;
console.log(y)

y /= 7 // y = y /7
console.log(y)

y %= 3 // y = y%3
console.log(y)

y = 2
y **= 4
console.log(y)

//3. Comparison operator o/p ->true/ false
// == , === ,  != , !== , > , < , >= ,<=
console.log("5" == 5) // == only compares value not there data types

console.log("5" === 5) // === (Strict equal)compare both value and data types

console.log("5" != 5) // != only checks value 
console.log("5" !== 5) // (Strict not equal) check both value and data type

//> greater than
console.log(14>14)
console.log(5>19)

//greater than equal
console.log(14 >= 14)

//< less than
console.log(14<9)
console.log(5 < 14)

//< less than equal
console.log(14 <= 9)
console.log(14 <= 14)

//4. Logical operator

let a = true 
let b = false

//and (&&) 
// if any of operand is false than the result is false
console.log(a && b)

// OR (||) 
//if any of the operand is true than result is true
console.log(a || b)

//Not (!)
console.log(!a)
console.log(!b)




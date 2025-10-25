//String Creation
//1. String literals
// let name = "Yash"
// let greet  = `Hello ${name} `

// console.log(greet)


//2. String Object
// let str = new String("Hello my name is Sameeksha")
// console.log(str)


//String Methods
let str = "Hello Sameeksha"


//1. Slice(start, end) // start -> included , end -> excluded
// console.log(str.slice(1,5))
// console.log(str.slice(-5))


//2. Substring(start, end)
console.log(str.substring(1,5))
console.log(str.substring(-5))

//3. substr(start, length)
console.log(str.substr(2,3))

//4. includes(substring)
console.log(str.includes("Sam"))
console.log(str.includes("Pre"))

//5. startsWith(substing)
console.log(str.startsWith("sam"))
console.log(str.startsWith("Hel"))

//6. endsWith(substring)
console.log(str.endsWith("sam"))
console.log(str.endsWith("sha"))

//7. trim()
let s = "       Hello Yash           "
console.log(s)
console.log(s.trim())

//8. split(seperator)
let str1 = "Apple,mango,orange,banana,orange"
console.log(str1.split(","))

//9. replace(old, new)
//replace only first occurance
console.log(str1.replace("orange", "Kiwi"))
//replace all occurances
console.log(str1.replace(/orange/g , "kiwi"))

//10. toUpperCase()
console.log(str.toUpperCase())
console.log(str.toLowerCase())

console.log(str.indexOf("llo"))
console.log(str.charAt(4))

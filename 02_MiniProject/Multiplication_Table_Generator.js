//Multiplication_Table_Generator
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Multiplication Table Generator")
readline.question("Enter a number: ", (num)=>{
    let n = parseInt(num)

    console.log(`Multiplication Table of ${n}:`)

    for(let i = 1 ; i<= 10 ; i++){
        console.log(`${n} * ${i} = ${n*i}`)
    }

    readline.close()
})
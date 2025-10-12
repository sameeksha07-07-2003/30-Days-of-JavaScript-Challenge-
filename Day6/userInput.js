// let name = prompt("enter your name: ")
// console.log(name)
//alert("are you ready!")
// alert and prompt not run in node js environment because these are browser specific function

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter your name: " , (name)=>{
    console.log("hello "+ name);
    readline.close();
})
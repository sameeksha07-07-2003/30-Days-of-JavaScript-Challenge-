const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter the number : ", (num)=>{
    if(num % 3 == 0 && num % 5 == 0){
        console.log("no is divisible by both 3 and 5")
    }
    else{
        console.log("no is not divisible by both 3 and 5")
    }
    readline.close()
})


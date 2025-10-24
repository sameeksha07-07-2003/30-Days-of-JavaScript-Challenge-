//5! => 5*4*3*2*1

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter the number: ", num => {
    num = parseInt(num)
    if(num<0){
        console.log("Please enter the valid number!")
    }else{
        let factorial = 1;
        for(let i = 1 ; i<=num ; i++){
            factorial *= i; // factorial = factorial * i
        }
        console.log(`Factorial of ${num} is ${factorial}`)
    }

    readline.close()
})
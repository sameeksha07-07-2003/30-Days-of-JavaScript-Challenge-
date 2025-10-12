// 2 operand & operator(+,-,*,/,%)
const readline = require("readline").createInterface({
    input: process.stdin,
    output : process.stdout
})

readline.question("Enter 1st operand: ", (num1) => {
    readline.question("Enter 2nd operand: " , (num2) => {
        readline.question("Enter Operator: (+,-,*,/,%) " , (op) =>{
            let n1 = parseFloat(num1)
            let n2 = parseFloat(num2)
            let result ;

            if(op === '+')result = n1 + n2;
            else if(op === '-')result = n1-n2;
            else if(op === '*')result = n1*n2;
            else if(op === '/'&& n2 != 0)result = n1/n2;
            else if(op === '%')result = n1%n2;
            else result = "invalid operation"

            console.log("Result: ", result);
            readline.close();

        })
    })
})
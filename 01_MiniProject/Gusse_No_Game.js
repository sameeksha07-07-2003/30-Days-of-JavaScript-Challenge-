// floor value of 7.8 -> 7
// floor value of 10.2 -> 10 // Math.floor(7.8) 
//Math.random() => 0(included) to 1(excluded) 0.1,0.0006,0.777,0.999999999999999999


//console.log( Math.floor(Math.random()*10)+1)
//user input btw 1 to 10
//match user input & random value if same => won else lose

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

let randomNumber = Math.floor(Math.random()*10) + 1;

let attempts = 0;
function guessNumberGame(){
    readline.question("Gusse a Number between 1 to 10: ", (input)=>{
        let guess = parseInt(input);

        attempts++;

        if(guess < randomNumber){
            console.log("Too Small! ")
            guessNumberGame()
        }else if(guess > randomNumber){
            console.log("Too Large! ")
            guessNumberGame()
        }else{
            console.log("You won the Game! No of attempts: ",attempts)
            readline.close()
        }     
    })
}


guessNumberGame()
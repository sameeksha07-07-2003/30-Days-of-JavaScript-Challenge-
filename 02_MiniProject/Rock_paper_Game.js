//Rock-Paper-Scissors Game
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const choices = ["rock", "paper","scissors"]
const cmpChoice = choices[Math.floor(Math.random()*3)]

console.log("Rock-Paper-Scissors Game")

readline.question("Choose Rock, paper or scissors: " , (userChoice)=>{
    userChoice = userChoice.toLowerCase();
    
    console.log(`Computer choose: ${cmpChoice}`)

    if(userChoice === cmpChoice){
        console.log("It's a Draw!")
    }else if((userChoice === "rock" && cmpChoice === "scissors") || (userChoice === "paper"&& cmpChoice === "rock" ) || (userChoice === "scissors" && cmpChoice === "paper")){
        console.log("You Win!")
    }else{
        console.log("You Lose!")
    }

    readline.close()
})
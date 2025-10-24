const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const question = [{q:"What is 2+2?" ,a:"4"}, {q:"JS stands for ?", a:"JavaScript"}, {q:"What is captial of India?" , a:"Delhi"}]

let score = 0;
let i = 0;
function askQuestion(index){
    if(index >= question.length){
        console.log(`Quiz Over! Your Scroe: ${score}/${question.length}`)
        readline.close();
        return;
    }

    readline.question(question[index].q +" ", (answer)=>{
        if(answer.trim().toLowerCase() === question[index].a.toLowerCase()){
            console.log("Correct!")
            score++;
        }else{
            console.log("Wrong answer!")
            console.log("The correct answer is " + question[index].a)
        }
        askQuestion(index+1)
    })
}


askQuestion(0);
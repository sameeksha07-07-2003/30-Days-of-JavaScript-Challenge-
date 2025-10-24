//A-Z ,a-Z, 0-9,!@#$%^&*() //input : lenght of password

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter desired password length: ",(length)=>{
    if(length<=0){
        console.log("Please enter a valid lenght!")
    }else{
        const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwzyz0123456789!@#$%^&*()"
        let password = "";

        for(let i = 0; i<length; i++){
            let randomIndex = Math.floor(Math.random()*char.length)
            password += char[randomIndex];
        }

        console.log("Generated Password: "+ password)
    }

    readline.close()
})
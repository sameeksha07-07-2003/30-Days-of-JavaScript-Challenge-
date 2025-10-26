//  palindrome = Nitin  nitiN => nitin  == nitin  nittin

// not palindrome = sameeksha
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter a string to check if it's a palindrome: ", (input)=>{
    input = input.trim()
    input = input.toLowerCase().replace(/[^a-z0-9]/g , "")


    let start = 0
    let end = input.length - 1;
    let isPalindrome = true;
    while(start < end){
        if(input[start] !== input[end]){
            isPalindrome = false;
            break;
        }

        start++;
        end--;
    }

    if(isPalindrome == true){
        console.log(`${input} is a palindrome.`)
    }else{
        console.log(`${input} is not a palindrome.`)
    }

    readline.close()
})
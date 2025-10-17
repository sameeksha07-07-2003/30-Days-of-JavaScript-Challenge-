// Take another function as an argument

// function greetUser(name , callback){ //HOF
//     console.log("hello" + name)
//     callback()
// }

// function HowAreYou(){
//     console.log("How are you?")
// }

// greetUser("Yash" ,HowAreYou)

//Return a function as its result
// function greetUser(name){ //HOF
//     console.log("hello" + name)
//     return function HowAreYou(){
//      return "How are you?"
//     }
// }


// const howAreYou = greetUser("Yash")
// console.log(howAreYou())


//Callback Function

function processUser(name, callback){
    console.log("user" + name)
    callback()
}

function greet(){
    console.log("hello")
}

processUser("Yash", greet )
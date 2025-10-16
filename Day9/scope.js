// var a = 10 //global scope

// function add(){// global scope
//     let b = 30;// functional scope
//     function greet(){// functional scope
//         console.log("hello")
//     }
//     console.log(b)
// }

// console.log(b) //error
//block scope for(){}, while(){} , {}
//var 
// {
//     var c = 30
//     console.log(c)
// }

// console.log(c)

//let & const

// {
//     let num = 17
//     console.log(num)
// }

// console.log(num)

// {
//     const num = 17
//     console.log(num)
// }

// console.log(num)

//global (var , function,...) -> access from anywhere in the program 
//functional scope (var, let , const) (variable , function)-> only access inside the functional scope 
//let , const -> function scope , block scope
//var -> functional scope 

//nested scope
// function add(){// global scope
//     let b = 30;// functional scope
//     function greet(){// functional scope
//         let a = 20
//         console.log(b)
//     }
//     greet()
// }

// add()

let b = 7

function add(){// global scope
    // let b = 30;// functional scope
    function greet(){// functional scope
        // let b = 20
        console.log(b)
    }
    greet()
}

add()
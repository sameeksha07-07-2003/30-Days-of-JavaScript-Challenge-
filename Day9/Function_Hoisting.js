//Declaration function hoisting

// greet()

// function greet(){
//     console.log("HEllO")
// }

// greet()

//expression function hoisting 

// greet() // greet is not a funciton 

// var greet = function (){
//     console.log("HEllO")
// }

//arrow function hoisting 

// greet() // greet is not a funciton 

// var greet = () => {
//     console.log("HEllO")
// }


///Questions
// var a = 1;
		
// function foo() {
// 	console.log(a);  // What will this print?
		
// 	var a = 2;
// 		console.log(a);
// 	}
		
// foo();
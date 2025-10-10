// Type Coercion (Implicit Conversion):
//1. String conversion -> +
console.log( 4 + "12" )
console.log("Hello" + 4)
console.log(4 + 7 + 1 + "Hello")
console.log( "Hello" + 4 + 7 + 1 )

//2. Number Conercion -> - , * ,/
console.log("12" * 2)
console.log("12" / 2)
console.log("12" - "2")
console.log("hello" - "2")
console.log("hello" * "2")
console.log("hello" / "2")

//3. Boolean Coercion
if("hello"){
    console.log("I am inside if")
}
if(0){
    console.log("I am inside if")
}
// creating date obj
// let d = new Date()
// console.log(d)

// let dt = new Date(2024, 4, 12)
// console.log(dt)

// let dt = new Date(2024, 4, 12,13,25,0)
// console.log(dt)

//Getting Dates and Times
// console.log(d.getFullYear())
// console.log(d.getMonth())
// console.log(d.getDate())
// console.log(d.getDay())
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())
// console.log(d.getTime())


let d = new Date();
// d.setFullYear(2030);
// d.setMonth(0);  // January
// d.setDate(15);
// console.log(d);


console.log(d.toString())
console.log(d.toDateString())
console.log(d.toTimeString())
console.log(d.toLocaleString())
console.log(d.toLocaleDateString())
console.log(d.toLocaleTimeString())


console.log(Date.now())

let dt = new Date("2025-10-25")
console.log(dt.getTime())

let ts = new Date(1761390400090)
console.log(ts.toString())

//calculations on date 
let today = new Date()
today.setDate(today.getDate()-5)
console.log(today)

let d1 = new Date("2025-10-01")
let d2 = new Date("2025-10-25")

let diff = d2 - d1

let days = diff/(1000*60*60*24)

console.log(days)
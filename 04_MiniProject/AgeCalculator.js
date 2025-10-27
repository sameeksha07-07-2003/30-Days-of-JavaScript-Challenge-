// input - dob (2003-07-07)
// output - 22years Xmonths Ydays , day of birth 

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter your date of Birth (YYYY-MM-DD): " ,(dob)=>{

    /// string covernt -> date object
    let birthDate = new Date(dob);
    let currDate = new Date()

    //calculate years
    const ageInMs = currDate - birthDate
    const ageDate = new Date(ageInMs)
    const years = ageDate.getUTCFullYear() - 1970

    //calculate Months 
    const months = currDate.getMonth() - birthDate.getMonth() + (currDate.getDate()<birthDate.getDate()?-1:0)


    //calculate Days
    const days = new Date(currDate.getFullYear(), currDate.getMonth(), birthDate.getDate())
    const daysInMs = currDate - days
    const noOfDays =Math.floor( (daysInMs)/(1000*60*60*24))

    const dayOfWeek = birthDate.toLocaleDateString("en-Us",{weekday: "long"})

    console.log(`You are ${years} years, ${months} months, and ${noOfDays} days old.`)
    console.log(`You were born on a ${dayOfWeek}`)

    readline.close()
})
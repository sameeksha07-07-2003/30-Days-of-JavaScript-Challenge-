//input dob
//output current age

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter your date of birth (YYYY-MM-DD): ",(dob)=>{
    let birthDate = new Date(dob)
    let currDate = new Date()

    const ageInMs = currDate - birthDate

    const ageDate = new Date(ageInMs)
    const years = ageDate.getUTCFullYear() - 1970
  
    //caluclate month 
    const months = currDate.getMonth() - birthDate.getMonth() + (currDate.getDate() < birthDate.getDate() ? -1:0)

    //calculate days
    const days =  new Date(currDate.getFullYear(),currDate.getMonth(),birthDate.getDate())
    const daysinMs = currDate - days
    const noofDays = Math.floor((daysinMs)/(1000*60*60*24))


    const dayOfWeek = birthDate.toLocaleDateString("en-Us",{weekday: "long"})

    console.log(`You are ${years} years, ${Math.abs(months)} months, and ${Math.abs(noofDays)} days old.`)
    console.log(`You were born on a ${dayOfWeek}`)

    readline.close()
})
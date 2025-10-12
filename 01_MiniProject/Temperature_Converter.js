//1 numerical value (temperature) & convert to Fahrenhneit => enter "F", convert to celcius => enter "C"
// F = (C * 9/5) + 32
// C = (F-32)*5/9

const readline = require("readline").createInterface({
    input: process.stdin,
    output : process.stdout
})

readline.question("Enter temperature: ", (temp)=>{
    readline.question("Convert to (F/C): ", (scale)=>{
        let t = parseFloat(temp)
        let ans ;

        if(scale.toUpperCase() === 'F')ans = (t * 9/5) + 32
        else if(scale.toUpperCase() === 'C') ans = (t-32)*5/9
        else ans = "Invalid Scale"


        console.log("Converted Temperature is :", ans)
        readline.close()
    })
})
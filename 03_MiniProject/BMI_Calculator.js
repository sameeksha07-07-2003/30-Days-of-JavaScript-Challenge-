
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter your weight in kg:" , (weight)=>{
    weight = parseFloat(weight)
    readline.question("Enter your height in meters: ", (height)=>{
        height = parseFloat(height)

        if(weight <= 0 || height <=0 ){
            console.log("Please enter the valid weight and height!")
        }else{
            let bmi = weight/(height*height) //23.4568734
            bmi = bmi.toFixed(2) //23.45

            let category = ""

            if(bmi < 18.5) category = "UnderWeight"
            else if(bmi <25)category = "Normal Weight"
            else if(bmi <30)category = "Overweight"
            else category = "Obese"

            console.log(`BMI : ${bmi} and category : ${category}`)
        }

        readline.close()
    })
})
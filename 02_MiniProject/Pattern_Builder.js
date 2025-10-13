//Pattern Builder
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter number of rows: ", (rows) => {
    readline.question("Choose pattern (square / triangle / inverted / pyramid): ", (pattern)=>{
        let n = parseInt(rows)
        pattern = pattern.toLowerCase()

        //Square
        if(pattern === 'square'){
            for(let r = 1; r<=n ; r++){
                let row = ""
                for(let c = 1 ; c<=n; c++){
                    row += "*"
                }
                console.log(row)
            }
        }
        //triangle
        else if(pattern === 'triangle'){
            for(let r = 1 ; r<=n ; r++){
                let row = ""
                for(let c = 1 ; c<=r; c++ ){
                    row += "*"
                }
                console.log(row)
            }
        }

        //inverted
        else if(pattern === 'inverted'){

            for(let r = 1 ; r<=n  ; r++){
                let row = "";
                //spaces 
                for(let s = 1 ; s<= (n-r); s++){
                    row += " "
                }
                //starts
                for(let c = 1 ; c<=r; c++ ){
                    row += "*"
                }
                console.log(row)
            }

        }
        else if(pattern === "pyramid"){
            for(let r = 1 ; r<=n ; r++){
                let row = ""

                //spaces
                for(let s = 1; s<= (n-r) ; s++){
                    row += " "
                }
                //starts
                for(let c = 1 ; c<= (2*r - 1); c++){
                    row+="*"
                }

                console.log(row)
            }
        }else{
            console.log("Invalid pattern!")
        }

        readline.close()
    })
})
//input -> string // output -> word count , char count (with spaces),char count (without spaces), longest word, shortest word,avg word length

const { Console } = require("console")

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter a sentence: ", (sentence)=>{
    const trimmedStr = sentence.trim() ///My name        is     Sameeksha

    const words = trimmedStr.split(/\s+/)
    const wordCount = words.length

    const charCountWithSpaces = trimmedStr.length
    const charCountWithoutSpaces =  trimmedStr.replace(/\s+/g, "").length ///MynameisSameeksha

    let longestWord =""
    let shortestWord = words[0]

    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word
        }
        if(word.length < shortestWord.length){
            shortestWord = word
        }
    }

    const avgWordLength = (charCountWithoutSpaces / wordCount).toFixed(2)

    console.log("\n Word Analysis:")
    console.log(`Words Count : ${wordCount}`)
    console.log(`Characters (with Spaces) : ${charCountWithSpaces} `)
    console.log(`Characters (without Spaces) : ${charCountWithoutSpaces} `)
    console.log(`Longest Word : ${longestWord}`)
    console.log(`shortest Word : ${shortestWord}`)
    console.log(`Average word length : ${avgWordLength}`)

    readline.close()
   
})
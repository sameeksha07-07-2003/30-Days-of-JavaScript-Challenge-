//array of object

const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "Dream bigger. Do bigger.", author: "Unknown" },
];

const randomIndex = Math.floor(Math.random()*quotes.length)
const quote = quotes[randomIndex]

console.log(`Quote: ${quote.text}`)
console.log(`Author: ${quote.author}`)

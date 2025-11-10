//1. Add expense 2. show Expense 3. Total Expense 4. exit
//1. amount,category 

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

let expenses = [];

function addExpense(){
    rl.question("Enter amount: ", (amount)=>{
        rl.question("Enter category: ",(category)=>{
            let expense = {
                amount: Number(amount),
                category,
                date: new Date().toLocaleString()
            }

            expenses.push(expense);

            console.log("Expense Added!");
            mainMenu();
        })
    })

 
}


function showExpenses(){
    console.log("-------All Expenses-------");
    if(expenses.length === 0)console.log("No expenses found!");
    else{
        expenses.forEach((e,i)=>{
            console.log(`${i+1}. ${e.amount}Rs | ${e.category} | ${e.date}`);
        })
    }

    mainMenu();
}


function totalExpense(){
    let total = expenses.reduce((sum,e)=>sum+e.amount , 0);
    console.log("Total Expense: "+ total + "RS");
    mainMenu();
}

function mainMenu(){
    console.log("1. Add Expense");
    console.log("2. Show Expenses")
    console.log("3. Total Expense")
    console.log("4. Exit")

    rl.question("Choose option: ",(choice)=>{
        if(choice == 1)addExpense();
        else if(choice == 2)showExpenses();
        else if(choice == 3)totalExpense();
        else {
            console.log("Exiting...")
            rl.close();
        }
    })

}

mainMenu();
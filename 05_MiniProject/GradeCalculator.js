// input - student name and marks
// output - grade
// functions - 1. add students 2. showStudents  3. exit

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let students = [];

function addStudent(){
    rl.question("Enter Student Name: ",(name)=>{
        rl.question("Enter Marks (0-100): ",(marks)=>{
            marks = Number(marks)
            let grade = "";

            if(marks >=90)grade = 'A'
            else if(marks>=75)grade = 'B'
            else if(marks>=60)grade = 'C'
            else if(marks>=40)grade = 'D'
            else grade = 'F'
            students.push({name,marks,grade});

            console.log("Student Added successfully!");
            mainMenu();
        })
    })
}

function showStudents(){
    console.log("----Student Report----");
    if(students.length === 0)console.log("No students found.");
    else{
        students.forEach((s,i)=>{
            console.log(`${i+1}. Name: ${s.name}, Marks: ${s.marks}, Grade: ${s.grade}`);
        });
    }

    mainMenu();
}

function mainMenu(){
    console.log("1. Add Student");
    console.log("2. Show All Students")
    console.log("3. Exit")

    rl.question("Choose option: ",(choice)=>{
        if(choice == 1){
            addStudent();
        }else if(choice == 2)showStudents();
        else {
            console.log("Exiting...");
            rl.close();
        }
    })
}

mainMenu();
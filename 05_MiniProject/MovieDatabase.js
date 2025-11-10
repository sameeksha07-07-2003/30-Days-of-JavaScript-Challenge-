//CRUD
//1. addMovie 2. showMovies 3.UpdateMovie 4.delete Movie 5. exit
//1. name, rating , release

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let movies = [];

function addMovie(){
    rl.question("Movie Name: ",(name)=>{
        rl.question("Rating(1-5): ",(rating)=>{
            rl.question("Release Year: ",(year)=>{
                movies.push({name,rating : Number(rating) ,year});
                console.log("Movie Added!");

                mainMenu();
            })
        })
    })
}


function showMovies(){
    console.log("--------Movie List--------");
    if(movies.length == 0)console.log("No movie found!")
    else{
        movies.forEach((m,i)=>{
            console.log(`${i+1}. ${m.name} | ${m.rating} | ${m.year}`);
        })
    }

    mainMenu();
}

function updateMovie(){
    rl.question("Enter movie name to update: ",(name) =>{
        let movie = movies.find((m) => m.name === name)
        if(!movie){
            console.log("Movie not found!");
            return mainMenu();
        }

        rl.question("New Rating: ",(rating)=>{
            movie.rating = Number(rating);
            console.log("Movie updated!")
            mainMenu();
        })
    })
}

function deleteMovie(){
    rl.question("Enter movie name to delete: ",(name)=>{
        let index = movies.findIndex((m)=> m.name === name)


        if(index === -1){
            console.log("Movie not found!");
        }else{
            movies.splice(index,1);
            console.log("Movie Deleted!")
        }

        mainMenu();
    })
}

function mainMenu(){
    console.log("1. Add Movie");
    console.log("2. Show Movie ")
    console.log("3. Update Movie Rating")
    console.log("4. Delete Movie ")
    console.log("5. Exit")

    rl.question("Choose option: ",(choice)=>{
        if(choice == 1)addMovie();
        else if(choice == 2)showMovies();
        else if(choice == 3)updateMovie();
        else if(choice == 4)deleteMovie();
        else {
            console.log("Exiting...");
            rl.close();
        }
    })
}

mainMenu();
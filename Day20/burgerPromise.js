//recipt => new Promise()
//kitchen => Executor function
//order ready => resolve()(sucess)
//buns khatam => reject()(failure)
//burger khana => .then()
//refund => .catch()

//creating promise
// let burgerPromise = new Promise((resolve, reject) => {
//     //asyn task 
//     setTimeout(() => {
//         let shopeOpen = false;
//         if (shopeOpen) {
//             resolve("Ye lo burger");
//         } else {
//             reject("sorry, Burger is not available");
//         }
//     }, 5000);

// })

// //consume promise
// // burgerPromise.then((msg)=>{
// //     console.log("success: "+ msg);
// // }).catch((error)=>{
// //     console.log("Error:"+error);
// // })

// //async function

// async function getLunch() {
//     console.log("Start");

//     try {
//         console.log("order placed..");

//         let burger = await burgerPromise;

//         console.log("lets eat burger" + burger);
//     } catch (error) {
//         console.log("Reason: " + error);
//     }
//     console.log("Function End")
// }


// getLunch();

// new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task 1");
//         resolve([1,2,3,4,7]);
//     },2000)
// })
// .then((user)=>{
//     console.log(user);
// })
// .catch((msg)=>{
//     console.log(msg+ "Task not completed")
// })

//CHANNING 
// const promise1 = new Promise((resolve, reject)=>{
//     let isValid = true;
    
//     if(isValid){
//         resolve({username: "Yash", email : "yash@gmail.com"});
//     }else{
//         reject("Error occurs")
//     }
// })
 
// promise1.then((user)=>{
//     console.log(user)
//     return user.username;
// })
// .then((username)=>{
//     console.log(username)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Runs every time")
// })


//async await

// async function GithubUser() {
//     try{
//         const response = await fetch("https://api.github.com/users/sameeksha07-07-2003");
//         const data = await response.json();
//         console.log(data);
//         console.log(data.login)

//     }catch(error){
//         console.log("Error", error);
//     }
// }

// GithubUser();

//.then() .catch()

// fetch("https://api.github.com/users/sameeksha07-07-2003")
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })
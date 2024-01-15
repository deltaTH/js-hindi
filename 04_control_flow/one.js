//if 

// if(condition == true){
//     //do something
// }

// const isUserLoggedIn = true;
// const temperature = 41;

// if(temperature < 50){
//     console.log("less than 50")
// }
// else {
//     console.log("Tempratue is greater than 50");
// }


// <,>,<=,>=,==,===,!=,!==


// const score = 200;

// if(score > 100){
//     // const power = "Flying";
//     var power = "Flying"; // isUserLoggedIn is accessible outside the if block
//     console.log(`User Power : ${power}`);
// }

// console.log(`User Score : ${power}`);

// const balance = 1000;

// if(balance > 500) console.log("Test1"),
// console.log("Test2");

// basic if else ladder - you know


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to make a purchase");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}
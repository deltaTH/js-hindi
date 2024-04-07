// object literal

const { log } = require("console");

const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        console.log(`Username : ${this.username}`);
        // console.log("Got user details from databse");
        console.log(this);
    }

}

console.log(user.username);
console.log(user.getUserDetails())
// console.log(this); - gives empty {} abhi ke liye coz global context me kuch rakkha nhi hai

//  CONSTRUCTOR FUNCTION 

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this;
    // return kare na are wo implicilty return ho hi jata hai

}

// NEW - new keyword se sabse pehle ek empty object create hota hai
// fir constructor function call hota new keyword ke kaaran
// this keyword se saare arguments uske andar inject ho jaata jo bhi hamne provide kara hai


const userOne = new User('Abhay', 12, true)
const userTwo = new User("ChaiaurCode",11,false)
// console.log(userOne)
console.log(userOne.constructor)// khud ka hi refrence de dega - [Function: User]
// console.log(userTwo);

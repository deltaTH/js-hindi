// javascript master karne ke liye ek toh OBJECTS and dusre EVENTS master karne hote
/*
Objects declare karne ke do tarike
1. ek literal ki tarah - isse singleton nhi banta
2. ek constructor ki tarah - isse singleton banta
concept aata hai "Singleton" ka
*/

// object literals...

const pehlaObject = {}; // ye ban gya object abhi empty hai
// console.log(typeof pehlaObject);

const mySym = Symbol("key1")
// Q - Symbol lo, object ki key me add karo aur print karke dikha do??



const JsUser = {
    name : "Abhay",
    "full name" : "Abhay Nandan Singh", // isse toh second method se hi access karna padega...
    age : 18,
    [mySym] : "myKey1", // mySym - aise nhi
    location : "Gorakhpur",
    email : "abhay@dinc.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" ,"Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]) // double quotes isilye use karne pad rhe coz key values ko bhi as string treat karta hai object
// console.log(JsUser["full name"]) // aise

// console.log(JsUser[mySym])
// console.log(typeof mySym) // --> ab ye symbol output dega

JsUser.email = "abhay@google.com"
// Object.freeze(JsUser) // --> ab ue koi changes nhi karne dega
JsUser.email = "no@change.com"

// console.log(JsUser)

JsUser.greetings = function(){
    console.log("Namaste JsUser");
}

JsUser.greetingsTwo = function(){
    console.log(`Hello ${this.name}, Welcome aboard`)
}

console.log(JsUser.greetings()) // --> function run karke Namaste JsUser print hoga
console.log(JsUser.greetings) // -->[Function (anonymous)]
console.log(JsUser.greetingsTwo()) //-->Hello Abhay, Welcome aboard
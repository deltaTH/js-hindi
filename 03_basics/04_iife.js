// Immediately Invoked Function Expression (IIFE)

// IIFE is a function that is executed right after it is created.

// It has two parts:
// 1. Anonymous function with lexical scope enclosed within the Grouping Operator ().
// 2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// Syntax
// (function () {
//     // logic
// })();
// The first part is a function expression that is wrapped within the grouping operator ().
// The second part () invokes the function expression immediately.

// Example
(function () {
    console.log("Welcome to the IIFE");
})(); // semi colon is necessary here BECAUSE ISKO PTA NHI KI CONTEXT ROKNA KAHA HAI 

// Global scope se pollution hoti hai kai baar toh, global scope ke jo variables hai uske pollution ko hatane ke liye IIFE use karte hai

((name)=> {
    console.log(`Welcome to the LIFE , ${name}`);
})("PIHU");
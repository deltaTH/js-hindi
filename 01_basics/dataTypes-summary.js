// Primitive and Non-Primitive

/*Primitive - call by value hote hai - copy pe kaam hota hai

7 types : String,Number, Boolean, NULL,undefined, Symbol, BigINT

*/

// Q - Js : Dynamically typed [-] / statically typed ??
/*
JavaScript is a dynamically typed language. In dynamically typed languages, the data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them. There's no inbuilt way to annotate or restrict the types of variables.
Statically typed languages, on the other hand, require you to explicitly declare the data types of variables before you use them. This is done by assigning a type annotation to the variable declaration. The type checker will then ensure that the variable is only assigned values of the correct type.
There are pros and cons to both dynamically and statically typed languages. Dynamically typed languages are generally more flexible and easier to use, but they can be more prone to errors. Statically typed languages are more reliable and can catch errors early, but they can be more verbose and difficult to learn.
*/

const score = 100
const scoreVal = 100.3
const isLoggedIn = false
const outsideTemp = null // iska datatype "object" aata hai
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);

const bigNumber = 9632587412589631n
console.log(typeof bigNumber);

// Reference type (non-Primitive) - Array, Objects, Functions

const heroes = ["batman", "deadpool","spiderman"]

let myObj = {
    name : "Abhay",
    age  : 22
}

const myfunc = function (){
    console.log("Hello World");
}

//https://262.ecma-international.org/5.1/#sec-11.4.3

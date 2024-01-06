let score = "33abc" // -> NaN
//score = "33abc"  -> NaN
//score = "33" -> 33
// score = null -> 0
//score = undefined -> NaN
//score = true -> 1
// score = "anystring" -> NaN

// console.log(typeof score);
// console.log(typeof(score));

let valInNumber = Number(score);

// console.log(valInNumber);
// console.log(typeof valInNumber);

let isLoggedIn = "";
// 1 -> true
// "abhay" -> true
// "<space>" -> true
// "" -> false


let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

let someNo = 32

let stringNo = String(someNo);
// console.log(someNo);
// console.log(typeof stringNo);
// console.log(stringNo);

//***************************OPERATIONS**********************************/

let value = 3
let negval = -value
// console.log(negval);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// 4
// 0
// 4
// 8
// 0.6666666666666666
// 2

let str1 = "hello"
let str2 = " Abhay"

let str3 = str1 + str2 // aur saare aritmatic symbols pe NaN aa rha, sirf + kaam kar rha
// console.log(str3);

// console.log(1+2); //3
// console.log("1"+2); //12
// console.log(1+"2"); //12
// console.log("1"+2+2); //122
// console.log(1+2+"2"); //32

// console.log(20%6);

// console.log(true); // true
// console.log(+true); // 1
// console.log(-false); // -0
// console.log(+"string"); NaN
// console.log(+""); //0

// bad practice
let num1, num2, num3 
num1 = num2 = num3 = 2+2;

let gameCounter = 100;
console.log(++gameCounter)
console.log(gameCounter++)
//prefix postfix read
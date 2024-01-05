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
console.log(booleanIsLoggedIn);

let someNo = 32

let stringNo = String(someNo);
console.log(someNo);
console.log(typeof stringNo);
console.log(stringNo);
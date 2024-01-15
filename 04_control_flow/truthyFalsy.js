const userEmail = [];

// if(userEmail){
//     console.log("Got user Email");
// }
// else{
//     console.log("No user Email");
// }

/*
FALSY VALUES:

False , 0 , -0 , BIGINT ka 0n , "" , null , undefined , NaN

*/

/*
TRUTHY VALUES:

Anything that is not FALSY is TRUTHY

BUT Tide presents CHAUKANE wali values : 

"0" , 'false' , " " , [] , {} , functio(){} , 

*/

// BUT agar array check karna hi pad jaaye toh :

// const arr = [];
// if(arr.length === 0){
//     console.log("Empty Array");
// }

//aise hi same object bhi check kar sakte hai

// const obj = {};
// if(Object.keys(obj).length === 0){
//     console.log("Empty Object");
// }

//Nullish Coalescing Operator (??) : NULL or UNDEFINED ka safety checker hai

// let val1 = 5??10;

// let val1 = null ?? 10;
// let val1 = undefined ?? 10;
// let val1 = NaN ?? 10; // nan hi ho jayega
let val1 = null ?? 10 ?? 20; // jo pehle non-null value milega wohi print hoga
console.log(val1)

// Terenary Operator :
// syntax : condition ? exprIfTrue : exprIfFalse
// let val = 5>2 ? "True" : "False";
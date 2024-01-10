// Arrays - Javascript arrays are resizable and can contain a mix of different datatypes.
// copy operations create shallow copies ( copy's properties shares the same refrence point ) rather than deep copies ( copy do not )

const myArray = [1,2,3,4,5,6,7,8,9]

const myHeroes = ["Batman", "Deadpool", "Raven"]

// const newArr = new Array(1,2,3,4,5,6,7,8,9)

// console.table([myArray,myHeroes,newArr]);

// Array methods : 

const myArr = [1,2,3,4,5]

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// shift - unshift un me aage se daalta, shift ke aage se nikalta

// myArr.unshift(33)
// myArr.shift();
// console.log(myArr); // hehe

// console.log(myArr.includes(7)) // boolean yes or no
// console.log(myArr.indexOf(4)) // index de dega

// const newArr = myArr.join() // ab isme dikkat ye ki newArr string me aayega
// console.log(myArr) //[ 2, 3, 4, 5 ]
// console.log(newArr) //2,3,4,5


//Slice and splice methods : 

const myArrOne = [0,1,2,3,4,5]

console.log ("A", myArrOne)

// slice me original array me modification nhi hota aur range include nhi hoti
const oprArr = myArrOne.slice(1,3)
console.log ("B", myArrOne)
console.log ("sliced", oprArr)

// spliced me dono hota - aisa lagta ki splice karke nikal leta original array me se elements ko
const oprArr2 = myArrOne.splice(1,3)
console.log ("C", myArrOne)
console.log("Splice ",oprArr2)


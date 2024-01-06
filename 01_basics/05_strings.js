const name = "Abhay"
const repoCnt = 87

// console.log(name+repoCnt+" repos made");

// console.log(`Hello My name is ${name} and my repo count is ${repoCnt}`);

const gameName = new String('Side-Runner');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-10,5)
console.log(anotherString);

const newStringOne = "       abhay            ."
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://deltath.io/careers%20apply"
console.log(url.replace('%20','-'));
console.log(url.includes('delta'));

//splitting based on some character

console.log(gameName.split('-'))
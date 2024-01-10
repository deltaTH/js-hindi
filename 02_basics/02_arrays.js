const marvel_heroes = ["Spiderman", "deadpool", "ironfist"]
const dc_heroes = ["Batman","Superman","Aquaman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

//push same hi array me operations kar deta but but but... Concat nya array return karta
// aur cheezein waise return karta jaise hame chaiyes

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes) 

//But ham ye bhi na use karke We will use SPREAD OPERATOR ... dot dot dot

const all_new_heroes = [...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,8,[7,5,[5,2,3]]]; // ab isko flat karenge
const flat_array =  another_array.flat(Infinity); // (bracket me depth dete bt infinity bhi use kar sakte)

// console.log(flat_array);

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1 ,score2,score3))

console.log(Array.isArray("Abhay"));//boolean
console.log(Array.from("Abhay")); // array bna dega har element ka
console.log(Array.from({name : "Abhay"})); // ye nhi kar payega abhi, hame specify karna padega key ya value ka array... toh abhi empty array return karega


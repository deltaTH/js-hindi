// array specific loops
// for of - loop

// ["","",""]
// [{}, {}, {}]

const arr = [1,2,3,4,5];

for (const num of arr){
    // console.log(num);
}

const greetings = "Hello World!";
for(const greet of greetings){
    // console.log(`Each character is ${greet}`);
}

//MAPS - key value pairs - unique keys - remembers order of insertion
const map = new Map();
map.set('IN',"India")
map.set('US',"United States")
map.set('UK',"United Kingdom")
map.set('IN',"India")

// console.log(map);

for(const [key,value] of map){
    // console.log(key, '->', value);
}

const myObject = {
    'game1' : 'Cricket',
    'game2' : 'Football',
    'game3' : 'Hockey'
}

//for of loop does not work with objects
//object ke liye kaam nhi kar rha
//AUR TARIKE HAI KAAM KARANE KO
// for (const [key,value] of myObject) {
//     console.log(key, '->', value);
// }
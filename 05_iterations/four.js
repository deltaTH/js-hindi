const myObject = {
    js : 'Javascript',
    php : 'PHP',
    ruby : 'Ruby'

}

//objects ke liye FOR_IN loop

for (const key in myObject) {
//    console.log(`${key} => ${myObject[key]}`);
}

// array pe try karte

const myArray = ['Javascript', 'PHP', 'Ruby'];

for (const key in myArray) {
    console.log(`${key} => ${myArray[key]}`);
}
 
// maps pe try karte - maps are not iteratable
// maps pe error nhi deta but kuch nhi print karta

const map = new Map();
map.set('IN',"India")
map.set('US',"United States")
map.set('UK',"United Kingdom")
map.set('IN',"India")

for (const key in map) {
//    console.log(`${key} => ${map[key]}`);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
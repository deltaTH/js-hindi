// dates in js

let myDate = new Date();
// console.log(typeof myDate); //object

// console.log(myDate); //2024-01-07T22:12:09.047Z
// console.log(myDate.toString()); //Sun Jan 07 2024 22:12:09 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Sun Jan 07 2024
// console.log(myDate.toISOString()); //2024-01-07T22:12:09.047Z
// console.log(myDate.toJSON()); //2024-01-07T22:12:09.047Z
// console.log(myDate.toLocaleDateString()); //1/7/2024
// console.log(myDate.toLocaleString()); //1/7/2024, 10:12:09 PM
// console.log(myDate.toLocaleTimeString()); //10:12:09 PM

// let myCreatedDate = new Date(2024,1,27);

// let myCreatedDate = new Date(2024,1,27,8,10,12);

// let myCreatedDate = new Date("2024-02-14");

let myCreatedDate = new Date("02-14-2024");

// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()+1);


//aur hi jyada customised output ke liye aise define kar sakte
newDate.toLocaleString('default', {
    weekday : "long"
})


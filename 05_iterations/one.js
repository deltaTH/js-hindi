// for

// for(let i = 0; i < 10; i++) {
//     const element = i;
//     if(element === 5) {
//         console.log('Igual a 5')
//     }

//     console.log(element)
// }

// for(let i = 1; i<= 10; i++) {
//     console.log(`Outer loop: ${i}`)
//     for(let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop: ${j}`)
//         console.log(`${i} * ${j} = ${i * j}`)
//     }


// }

// js me out of bound exceptions nhi hote
const myArray = ["flash","superman","batman","wonderwoman","aquaman","cyborg"];
// console.log(myArray.length);
for(let i = 0; i < myArray.length; i++) {
    // console.log(myArray[i])
}

for(let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        // break; // loop yhi ruk jayega
        continue; // sirf ye wali condition skip ho jayegi
    }

    console.log(`index is ${index}`);

}
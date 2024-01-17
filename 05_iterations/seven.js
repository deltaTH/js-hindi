const myNumbers = [1, 2, 3, 4, 5];

// const newNums = myNumbers.map((num) => {
//     return num * 2;
// })

const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 2)
                .filter((num) => num > 20)  
console.log(newNums);
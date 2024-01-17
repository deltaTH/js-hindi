const myNums = [1,2,3,4,5];

// const myTotal = myNums.reduce(function (acc, currVal){
//     console.log("acc : ",acc,"currVal : ", currVal);
//     return acc + currVal;
// },5)

const myTotal = myNums.reduce((acc, currVal) => acc + currVal,5)

// console.log(myTotal);

const shoppingCart = [
    {
        product : 'Phone',
        qty : 1,
        price : 699
    },
    {
        product : 'Screen Protector',
        qty : 1,
        price : 9.98
    },
    {
        product : 'Memory Card',
        qty : 2,
        price : 20.99
    }
]

const total = shoppingCart.reduce((acc, currVal) => (acc + currVal.price * currVal.qty),0)

console.log(total);
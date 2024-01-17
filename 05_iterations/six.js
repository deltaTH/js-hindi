// const coding = ['Javascript', 'PHP', 'Ruby', 'Python', 'Java'];


// const values = coding.forEach((val) => {
//     // console.log(val);
//     return val;
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

// const newNums = myNums.filter((num) => (num > 4) )
const newNums = myNums.filter((num) => {
    return (num > 4)
} )


// For each loop
const forNums = [];

myNums.forEach((num) => {
    if(num > 4){
        forNums.push(num);
    }
});

// console.log(forNums);
// console.log(newNums);

const books = [
    {
        title : 'The Alchemist',
        author : 'Paulo Coelho',
        price : 248,
        type : 'Adventure'
    },
    {
        title : 'The Monk who sold his ferrari',
        author : 'Robin Sharma',
        price : 200,
        type : 'Motivation'
    },
    {
        title : 'Think and Grow Rich',
        author : 'Napoleon Hill',
        price : 150,
        type : 'Motivation'
    },
    {
        title : 'Rich Dad Poor Dad',
        author : 'Robert Kiyosaki',
        price : 200,
        type : 'Motivation'
    },

    {
        title : 'The Theory of Everything',
        author : 'Stephen Hawking',
        price : 300,
        type : 'Science'
    }
]

// const userBooks = books.filter((book) => book.type === 'Motivation');

const userBooks = books.filter((book) => {
    return book.price >= 200 && book.type === 'Motivation';
})

console.log(userBooks);
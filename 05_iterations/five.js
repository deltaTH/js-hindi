// FOR EACH LOOP

const coding = ['Javascript', 'PHP', 'Ruby', 'Python', 'Java'];

// coding.forEach( function (val) {
//     console.log(val);
// })

//ARROW function

// coding.forEach((val)=>{
//     console.log(val);
// })

//alag function create karke

function print(val){
    console.log(val);
}

// coding.forEach(print);

// coding.forEach((val, index, arr)=>{
//     console.log(val, index, arr);
// })

const myCoding = [

    {
        name: 'Javascript',
        type: 'Frontend'
    },
    {
        name: 'PHP',
        type: 'Backend'
    },
    {
        name: 'Ruby',
        type: 'Backend'
    },
    {
        name: 'Python',
        type: 'Backend'
    },
    {
        name: 'Java',
        type: 'Backend'
    }

]

myCoding.forEach((item) => {
    console.log(item.type)
})
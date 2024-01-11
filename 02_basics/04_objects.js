// isme objects SINGLETON dekhenge

const tinderUser = new Object() // ye singleton hai
// const tinderUser = {} // ye literal hai

tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.isLoggedin = false

// console.log(tinderUser)

const regularUser = {
    email: "reguser@js.com",
    fullname: {
        userFullName: {
            firstName: "John",
            lastName: "Doe"
        },
    }
}

// console.log(regularUser.fullname.userFullName.firstName) // dot lagate jao access karte jao

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"e", 5:"f", 6:"g"}
const obj4 = {7:"a", 8:"b", 9:"c"}

// const obj3 = {obj1, obj2} // ye kaam nhi karega, ye nested object banayega, array wali dikkat
// const obj3 = {...obj1, ...obj2} // spread operator --> ye bhi kaam karega

const obj3 = Object.assign({}, obj1, obj2, obj4) // ye bhi kaam karega (target, source) values dete hai

// console.log(obj3); 

// database se jab values aati toh array of objects aate

const users = [
    {
        id: 1,
        name: "John Doe",
        email: "stm@mail.com"
    },
    {
        id: 2,
        name: "John Doe",
        email: "wefdf"
    },
    {
        id: 3,
        name: "John Doe",
        email: "wefdf"
    }
]

//first value access karni
// console.log(users[0].name)

// console.log(tinderUser);
// // ab jaise hame tinder user ki saari keys chaiye
// console.log(Object.keys(tinderUser)) // ye array dega
// // aise hi values bhi nikal sakte
// console.log(Object.values(tinderUser))
// // aise hi key value pairs bhi nikal sakte
// console.log(Object.entries(tinderUser)); // isse har key value pair, ek array me aa jayega

// // kai baar aisa hota jo ham access kar rhe wo exist hi nhi karte, in that case
// console.log(tinderUser.hasOwnProperty("name")) // ye true dega if exists



// ++++++++++++++++++++++++++++++++++++++DESTRUCTURNG++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    courseName: "JavaScript",
    duration: "2 months",
    price: 1000,
    courseType: "online",
}

console.log(course.courseName) // koi burai nhi aise karne me

//ek aur tarika
// const {courseName, duration, price, courseType} = course // ye destructuring hai (object destructuring)
//alag se koi name bh de sakte kisi bhi value ko
// console.log(courseName) // ye bhi same hi hai, baar baar dot laga ke nhi likhna padega4

const {courseName : name} = course
console.log(name) // same value dega



// ------------------------------------APIS------------------------------------------------------------
// APIs --> Application Programming Interface
// apna kaam dusre ke sir pe daal dena
// key value pairs dono string hote
// {
//     "name": "John Doe",
//     "age" : 20, // numbers aur boolean nhi string me
//     "email" : "jd@dmk.in"
// }

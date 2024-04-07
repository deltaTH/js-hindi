// let myName = "Abhay     "
// let myChannel = "delta   "

const { log } = require("console");

// // console.log(myName.trim().length);
// //but hamko aise karna hai
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abhay = function(){
    console.log(`abhay is omnipresent`)
}

Array.prototype.heyAbhay = function(){
    console.log(`abhay says hello`);
}

// heroPower.abhay()
myHeros.abhay()

myHeros.heyAbhay(); 
// heroPower.heyAbhay(); - nhi kaam karega

// hamne direct global object me hi "abhay" property inject kardi
// toh ab saare functions, arrays, stings ke paas abhay naam ki property hai jo ham kabhi bhi access kar sakte

//------------------------INHERITANCE--------------------------------------------------------------------------------------------------//

const User = {
    name : "chai",
    email : "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

// modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode       "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`) - undefined de rhe obselete property hai, charcha nhi karenge
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"Abhay ".trueLength();
"iceTea".trueLength();
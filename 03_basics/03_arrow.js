const user = {
    username : 'batman',
    price : 999,

    welcomemessage : function(){
        console.log(`Welcome ${this.username}`);
        console.log(this);
    }
}

// user.welcomemessage();
// user.username = "superman";
// user.welcomemessage(); // this time username will be updated

// console.log(this); // this is the global object and is empty {} in node
// but in browser this is the window object

// function chai(){
//    let username = "chai";
//     console.log(this); // this is the global object
//     console.log(this.username); // this.username is same as username, let pe nhi kaam kar rha...
//     // chai sir bol rhe ki function me kaam nhi karta, object me kaam karta hai
// }

// chai()

// const chai = function (){
//     let username = "chai";
//     console.log(this.username);
// }

// chai();

const chai = () =>{
    let username = "chai";
    console.log(this);
}

// chai();

// ---------------ARROW FUNCTIONS----------------

// ()=>{} // ye hai basic arrow function

// const addTwo = (a,b) => {
//     return a + b
// } ye basic tarika 

// const addTwo = (a,b) => a + b // aise ya 
// const addTwo = (a,b) => (a + b) //aise
// ye mentos tarika

const addTwo = (a,b) => ({name : "Abhay"}) // () laga ke object bhi return kar sakte

console.log(addTwo(5,6));

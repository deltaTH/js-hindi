if (true) {
    const a = 1;
    let b = 2;
    var c = 3;
}

// console.log(a); // ye dono toh nhi print hue
// console.log(b); // ye bhi nhi print hua
// console.log(c); // ye pencho ho gya print

// toh basically const and let are block scoped and var is function scoped

// baaki scope ke baare me jitta jante pehle se enough hai

function one(){
    const userName = "John";

    function two(){
        const website = "Google";
        console.log(userName);
    }
    // console.log(website); // ye nhi print hoga

    two();
}

// one();

if (true){
    const userName = "Abhay";
    
    if(userName === "Abhay"){
        const website = "Google";
        // console.log(userName + " works at " + website);
    }
    // console.log(website);
}
// console.log(userName);


// ___________________INTRESTING CONCEPT/EXAMPLE_________________________________
//HOISTING ka concept

console.log(addOne(5)); // ye run ho jayega
function addOne (num){
    return num + 1;
}

console.log(addTwo(5)); // but ye error dega, coz iska variable declaration niche hai
const addTwo = function(num){
    return num + 2;
}

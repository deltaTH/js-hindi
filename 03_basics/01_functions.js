function sayMyName(){
console.log("A")
console.log("B")
console.log("H")
console.log("A")
console.log("Y")
}

// sayMyName()

// function addTwoNumbers(a, b){ // ye hai parameters
//     console.log(a+b)
// }

function addTwoNumbers(a,b){
    let result = a+b
    return result
    console.log("Hello") // ye print nhi hoga
}

// addTwoNumbers(2, 3) // ye hai arguments
// addTwoNumbers(2, "a")
// addTwoNumbers(2, "4")

const result = addTwoNumbers(2, 3)
// console.log("Result : ",result)

function loginUserMessage(username = "defaultUser"){
    if(!username) return "Please provide a username"
    return `${username} has logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("John Doe"))


function calculateCartPrice(val1,val2,...num){
    return num
    // val1 aur 2 me suru ki values aa jayengi
    // rest num me chali jayengi
    // ... rest operator sab return karega
}

// console.log(calculateCartPrice(200,300,500,800))

const user = {
    username: "John Doe",
    age : 20
}

function handleObject(anyObject){
    console.log(`The username is ${anyObject.username} and the age is ${anyObject.age}`)
}

// handleObject(user)

handleObject({
    username : "Norman",
    age : 29
})

const newArray = [1,2,3,4,5,6,7,8,9,10]

function returnSecondValue(arr){
    return arr[1]
}

console.log(returnSecondValue(newArray))

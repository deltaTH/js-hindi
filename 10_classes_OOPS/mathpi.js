const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor)
// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI) - value will not change
// console.log(Math.floor(Math.PI))

const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailabe : true,

    orderChai : function(){
        console.log("Chai nhi ban paa rhi");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai,'name',{
    // writable : false,
    // enumerable : false,
    // enumerable matalab iteration
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key,value] of Object.entries(chai)){
    if(typeof value != 'function')
    console.log(`${key} : ${value}`);
}
const accountId = 445985
let accountEmail = "athAbhay@gmail.com"
var accountPass = "7894561230"
accountCity = "Gorakhpur" //aisa kar sakte but karna nhi

let accountState; // semi colon lagao na lagao koi dikkat nhi...

/*
prefer not to use var, because of scope issue in block scope and functional scope
*/

// accountId = 12345 - const keyword ko dubara change nhi karte
let name = "Mamta Mall"
console.log(accountCity);
console.table([accountEmail,accountId,accountPass,accountState,name])
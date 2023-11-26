const accountId = 1234
let accountEmail = "demo1@gmail.com"
var accountPassword = "demo1"
accountCity = "Jaipur"
let accountState

// accountId = 2 not allowed

accountEmail="demo2@gmail.com"
accountPassword="demo2"
accountCity="Bengaluru"

console.log(accountId);

// prefer not to use var because of issues with block scope and functional


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
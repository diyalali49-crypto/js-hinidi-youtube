const accountId = 14432
let accountEmail = "lali@gmail.com"
var accountPassword = "12345"
accountCity = "lalian"
//accountId = 2 //not allowed
let accountstate;
console.log(accountId);
accountEmail = "wah@lali.com"
accountPassword = "fsa3423"
accountCity = "sargodha"
/*
prefer not to use var because
of issue in block scope and function
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate]);
console.log(accountPassword);


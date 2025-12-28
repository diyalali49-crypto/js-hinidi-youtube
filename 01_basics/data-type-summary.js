//Primitive

//7 types:string ,number , boolean , null ,undefined,symbol,bigint.

const score = 100;
const scoreValue = 100.44;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId =Symbol("123")
console.log(id === anotherId);
//const bigNumber = 1653265357235753353534n



//Reference (Non primitive)

//Arrays,objects,Functions


const heros =["doga","kapil","sarla"];
let myObj={
    name: "diya lali",
    age: 17,
}
const myFunction=function(){
    console.log("hello world");
    
}

console.log(typeof myFunction);

//3. Set val to ? GetValue(val).
// 4. If val is undefined, return "undefined".
// 5. If val is null, return "object".
// 6. If val is a String, return "string".
// 7. If val is a Symbol, return "symbol".
// 8. If val is a Boolean, return "boolean".
// 9. If val is a Number, return "number".
// 10. If val is a BigInt, return "bigint"

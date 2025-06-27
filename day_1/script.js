// Datatypes -
// String
console.log("Awdiz", typeof "Awdiz" )
// Number 
console.log(11, typeof 11)

// Boolean 
console.log(true, typeof true)

// undefined
// var username=();


// null 
let userData = null;

// operators -

// increment
var counter = 1; // declare assign

counter = counter + 4;

console.log(counter);

// decrment
var counter = 1; // declare assign

counter = counter - 4;

console.log(counter);

// varibles - 
// var
console.log(a); // undefined
var a = 10;
console.log(a); 

function testVar() {
  var x = 5;
  console.log(x); 
}
testVar();

// let 

let b = 20;
console.log(b); 

function testLet() {
  let y = 30;
  if (true) {
    let y = 40; // block scoped
    console.log("Inside block:", y); 
  }
  console.log("Outside block:", y); 
}
testLet();


// const 
const c = 50;
console.log(c); 



const obj = { name: "Jyoti" };
obj.name = "Awdiz"; 
console.log(obj.name); 

// difference 

// hoisting 
// scope

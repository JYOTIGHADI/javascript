function myfirstfunction() {
    console.log("Hello world!")
}
myfirstfunction();

// Q . 1 Given an two variable addition and subtraction of them

let a = 20;
let b = 50;

function addition() {
    console.log(a + b)
}
addition();

function subtraction() {
    console.log(a - b)
}
subtraction();

// Q.2 Given a two variable print addition of them by using parameters.

let x = 40;
let y = 50;

function additionoftwonum( number1 , number2) {
    console.log(number1 + number2);
}
additionoftwonum(x , y);
additionoftwonum( 50, 50);

// Q.3 Given numbers write two function for addition and substraction.

function additionoffourvariable(num1 , num2 , num3 , num4){
    console.log( num1 + num2 + num3 + num4);
}

function subtractionoffourvariable(num1 , num2 , num3 , num4){
    console.log( num1 - num2 - num3 - num4);
}

additionoffourvariable( 10 , 20 , 30 , 50);
subtractionoffourvariable( 35, 60 , 20 , 70);

function additionoftwovariable( a , b){
    console.log( a + b);
    return a + b;
}
 console.log(additionoftwovariable(100, 300));
 console.log(additionoftwovariable(10, 50));

//  Q. array parameter

var colors = ["red", "black", "pink", "blue", "white"];
var userTypedcolor = "pink";

function getTypedSuggestions(data, userTypedcolor) {
  
  let filteredData = data.filter((ele) => ele == userTypedcolor);
  return filteredData;
}

const output = getTypedSuggestions(colors, userTypedcolor);
console.log(output, "output");


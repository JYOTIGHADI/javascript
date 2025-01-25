//print a no. from 1 to 10.
 console.log("Print a number 1 to 10");
for ( var i=1; i<=10; i++){ 
    console.log(i);
}

//use for loop to print all even no. between 1 and 20.
console.log("Print all even no. between 1 and 20");
for( var i=1; i<=20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

//use a for loop with a conditional to print all odd no. between 1 to 20.
console.log("Print all odd no. between 1 to 20");
for( var i=1; i<=20; i++){
    if(i % 2 !==0){
        console.log(i);
    }
}

//write a loop to calculate the sum of the first 10 natual no.
console.log("Sum of the first 10 natual no.");
var count = 0;
for(var i=1; i<=10; i++){
    count +=i;
}
console.log(count);

//use a for loop to print all numbers divisible by 5 between 1 and 50.
console.log("print all numbers divisible by 5 between 1 and 50");
for( var i=1; i<=50; i++) {
    if( i % 5 == 0){
        console.log(i);
    }
}

//write a loop to calculate the factorial of given number.
console.log("Factorial:");
var num = 4;
for( var i = num - 1; i>=1; i--){
    num*=i;
}
console.log(num);

//write a loop to calculate the sum of all even no. between 1 and 100.
console.log("Sum of all even no. between 1 and 100");
var count= 0;
for( var i = 1; i<= 100; i++){
    if( i % 2 == 0) {
        count += i;
    }
}
console.log(count);

// Use a loop to check if a given number is prime.
var num = 1;
var isprime = true;

for( var i = 2; i < num; i++){
    if( num % i == 0){
        isprime = false;
        break;
    }
}

console.log("Prime check");
if( isprime && num > 1){
    console.log("prime");
}
else{
    console.log("Not prime");
}

// Write a loop to generate a multiplication table for a given number.
var num = 9;
console.log("Multiplication table for a given number 9");
for( var i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${ num * i}`);
}

//Use a loop and conditionals to print the Fibonacci sequence up to n terms.
var a = 0;
var b = 1;
console.log("Fibonacci sequence");
for( var c = 0; c <= 100; c = a + b){
    console.log(c);
    a = b;
    b = c;
}

//Use a for loop to find all perfect squares between 1 and 100.
console.log("Perfect squares between 1 and 100");
var start = 1;
var end = 100;
for( var i = start; i <= end; i++){
    let square = i * i;
    if( square <= end){
        console.log(square);
    }
}

//Use a for loop and conditionals to print all numbers divisible by both 3 and 5 between 1 and 100.
console.log("Numbers divisible by both 3 and 5 between 1 and 100");
for( var i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}
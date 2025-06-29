// If-Else and Switch

// 1. Write a program to check if a number is positive, negative, or zero using if-else.

 var numbers =(6) 

if (numbers > 0) {
    console.log("The number is positive.");
} else if (numbers < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// 2. Check whether a number is even or odd using if-else.

 var num = (15);

if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// 3.Write a program that accepts age as input and prints:
// ○ "Child" if age < 13
// ○ "Teenager" if 13 ≤ age < 20
// ○ "Adult" if 20 ≤ age < 60
// ○ "Senior" if age ≥ 60

var age = 18;

if (age < 13) {
  console.log("Child");
} 
else if (age >= 13 && age < 20) {
  console.log("Teenager");
} 
else if (age >= 20 && age < 60) {
  console.log("Adult");
} 
else {
  console.log("Senior");
}



// 4. Create a program to print the grade of a student using if-else based on marks:
// ○ 90+ => A
// ○ 80–89 => B
// ○ 70–79 => C
// ○ 60–69 => D
// ○ below 60 => F

var marks = 90;

if (marks >= 90) {
  console.log("Grade: A");
} 
else if (marks >= 80 && marks <= 89) {
  console.log("Grade: B");
} 
else if (marks >= 70 && marks <= 79) {
  console.log("Grade: C");
} 
else if (marks >= 60 && marks <= 69) {
  console.log("Grade: D");
} 
else {
  console.log("Grade: F");
}



// 5. Use a switch case to take a number between 1–7 and print the corresponding weekday.

var day = 5;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day. Please enter a number between 1 and 7.");
}



// 6. Create a program using switch that takes a character input and prints whether it is a vowel (a, e, i, o, u) or consonant.

var vowel = a;
switch (vowel) {
    case a:
        console.log("is a vowel");
        break;
    case e:
        console.log("is a vowel");
        break;
    case i:
        console.log("is a vowel");
        break;
    case o:
        console.log("is a vowel");
        break;
    case u:
        console.log("is a vowel");
        break;
 
    default:
        console.log("Invalid vowel. Please enter a number between a,e,i,o,u.")
 }


//  7. Use if-else to check if a year is a leap year or not.

var year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is Not a Leap Year");
}



//8. Use switch-case to perform basic arithmetic operations (+, -, *, /) based on the operator input.

var num1 = 10;
var num2 = 5;
var operator = '-';

switch (operator) {
  case '+':
    console.log("Result: " + (num1 + num2));
    break;
  case '-':
    console.log("Result: " + (num1 - num2));
    break;
  case '*':
    console.log("Result: " + (num1 * num2));
    break;
  case '/':
    if (num2 !== 0) {
      console.log("Result: " + (num1 / num2));
    } else {
      console.log("Error: Division by zero");
    }
    break;
  default:
    console.log("Invalid operator. Please use +, -, *, or /");
}



// 9. Write a program using if-else to check if a person is eligible to vote (age ≥ 18).

  var age = 20;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}



// 10. Using if-else, check if three given sides can form a triangle or not.

var a = 7;
var b = 10;
var c = 5;

if (a + b > c && a + c > b && b + c > a) {
  console.log("The sides can form a triangle");
} else {
  console.log("The sides cannot form a triangle");
}


// For Loop, While Loop with Conditions 

// 1. Print all even numbers from 1 to 50 using a for loop and if condition.

for( var i = 1; i <= 50; i++ ){
    if( i % 2 == 0){
      console.log(i); 
    }
}

// 2. Using a while loop, print numbers from 10 to 1 in reverse order.

let j = 10;

while (j >= 1) {
  console.log(j);
  j--;
}

// 3. Write a program that prints the multiplication table of a number (e.g., 7) using a for loop.

let no = 7;

for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}

// 4. Using a for loop, print only the odd numbers from 1 to 100.

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 5.Create a program to count how many numbers between 1 and 100 are divisible by both 3 and 5 using for and if.

 let coun = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    coun++;
  }
}

console.log("Count of numbers divisible by both 3 and 5 between 1 and 100 is: " + coun);


// 6. Print the factorial of a number using a while loop.
let number = 5;
let factorial = 1;
// let i = 1; // 🔧 i must be declared and initialized

while (i <= number) {
  factorial *= i;
  i++;
}

console.log("Factorial of " + number + " is: " + factorial);

// 7. Use a for loop to find the sum of all numbers from 1 to 100.

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log("Sum of numbers from 1 to 100 is: " + sum);

// 8. Write a program using a loop and switch to print:
// ○ "Fizz" if the number is divisible by 3
// ○ "Buzz" if divisible by 5
// ○ "FizzBuzz" if divisible by both
// ○ Else print the number (From 1 to 50)

for (let i = 1; i <= 50; i++) {
  let output = "";

  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";

  switch (output) {
    case "Fizz":
      console.log("Fizz");
      break;
    case "Buzz":
      console.log("Buzz");
      break;
    case "FizzBuzz":
      console.log("FizzBuzz");
      break;
    default:
      console.log(i);
  }
}

// 9. Print the first 10 Fibonacci numbers using a while loop.

let n1 = 0, n2 = 1, count = 0; // Use 'count' or fix variable name

while (count < 10) {
  console.log(n1);
  let next = n1 + n2;
  n1 = n2;
  n2 = next;
  count++; // 🟢 This works now
}


// 10. Using a for loop, print the square of numbers from 1 to 10 and categorize them using if:
// ● Less than 20: “Small”
// ● Between 20–50: “Medium”
// ● More than 50: “Large”

for (let i = 1; i <= 10; i++) {
  let square = i * i;
  let category = "";

  if (square < 20) {
    category = "Small";
  } else if (square >= 20 && square <= 50) {
    category = "Medium";
  } else {
    category = "Large";
  }

  console.log("Number: " + i + ", Square: " + square + ", Category: " + category);
}


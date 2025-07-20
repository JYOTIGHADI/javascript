// 1. Ternary Operator
// eg .1
let number = 7;
let result;

if (number % 2 === 0) {
  result = "Even";
} else {
  result = "Odd";
}

console.log(result); 

// eg .2
let isLoggedIn = true;

let messages = isLoggedIn ? "Welcome back!" : "Please log in.";

console.log(messages); 


// 2. Template Literals

let name = "Jyoti";

let message = `Hello, ${name}! Welcome to JavaScript.`;

console.log(message); 


// 3. Destructuring

// using object
let person = {
  Username: "Jyoti",
  age: 22
};

let { Username, age } = person;

console.log(Username);
console.log(age); 

// using Array
let colors = ["red", "green", "blue"];

let [first, second] = colors;

console.log(first);  
console.log(second); 


// 4. Callback Function


function greet(name, callback) {
  console.log("Welcome ", name);
  callback();
}

function policy() {
  console.log("Please accept privacy policy.");
}

greet("Jyoti",policy);


// 5 . Promise

let myPromise = new Promise(function(resolve, reject) {
  let isSuccess = true;

  if (isSuccess) {
    resolve(" Operation was successful!");
  } else {
    reject(" Something went wrong.");
  }
});

myPromise
  .then(function(message) {
    console.log("Resolved:", message);
  })
  .catch(function(error) {
    console.log("Rejected:", error);
  });






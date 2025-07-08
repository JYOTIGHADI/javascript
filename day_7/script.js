// 1. Find the second highest number in an array without sorting it. Input: [10, 5, 20, 8, 15] Output: 15

let arrA= [10, 5, 20, 8, 15];
let max = -Infinity, secondMax = -Infinity;

for (let num of arrA) {
  if (num > max) {
    secondMax = max;
    max = num;
  } else if (num > secondMax && num < max) {
    secondMax = num;
  }
}

console.log(secondMax); 

console.log("-----------------------");

// 2. Character frequency counter from a string. Input: "apple" Output: { a: 1, p: 2, l: 1, e: 1 }

let strr= "apple";
let freq = {};

for (let ch of strr) {
  freq[ch] = (freq[ch] || 0) + 1;
}

console.log(freq); 
console.log("-----------------------");

// 3. Reverse only words in an array of strings. Input: ["hello", "world"] Output: ["olleh", "dlrow"]

let arrB = ["hello", "world"];
let reversed = arrB.map(word => word.split("").reverse().join(""));

console.log(reversed); 

console.log("-----------------------");

// 4. Check even or odd using map. Input: [1, 2, 3, 4] Output: ["odd", "even", "odd", "even"]

let numbs = [1, 2, 3, 4];
let results = numbs.map(n => n % 2 === 0 ? "even" : "odd");

console.log(results); 
console.log("-----------------------");

// 5. Flatten a nested array (1 level deep). Input: [1, 2, [3, 4], 5] Output: [1, 2, 3, 4, 5]

let nested = [1, 2, [3, 4], 5];
let flat = [].concat(...nested);

console.log(flat); 
console.log("-----------------------");

// 6. Print all prime numbers between 10 and 50. Output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

for (let i = 10; i <= 50; i++) {
  let prime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }
  if (prime && i > 1) console.log(i);
}
console.log("-----------------------");
// 7. Filter names that start with vowels. Input: ["Alice", "Bob", "Eve", "Uma", "Charlie"] Output: ["Alice", "Eve", "Uma"]

let names = ["Alice", "Bob", "Eve", "Uma", "Charlie"];
let vowels = ['A', 'E', 'I', 'O', 'U'];
let filtered = names.filter(name => vowels.includes(name[0].toUpperCase()));

console.log(filtered);
console.log("-----------------------");

// 8. Rotate array by one to the right. Input: [1, 2, 3, 4] Output: [4, 1, 2, 3]

let arrC = [1, 2, 3, 4];
arrC.unshift(arrC.pop());

console.log(arrC); 
console.log("-----------------------");

// 9. Check if all array elements are greater than 10. Input: [12, 15, 22] Output: true

let arry = [12, 15, 22];
let allAbove10 = arry.every(n => n > 10);

console.log(allAbove10); 

console.log("-----------------------");

// 10. Filter numbers divisible by 3 and 5. Input: [10, 15, 30, 20, 45] Output: [15, 30, 45]

let numbers = [10, 15, 30, 20, 45];
let divisible = numbers.filter(n => n % 3 === 0 && n % 5 === 0);

console.log(divisible); 
console.log("-----------------------");

// 11. Fibonacci sequence up to 15 terms. Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

let fib = [0, 1];
for (let i = 2; i < 15; i++) {
  fib.push(fib[i - 1] + fib[i - 2]);
}

console.log(fib);
console.log("-----------------------");

// 12. Count occurrences of a value in array. Input: [1, 2, 1, 3, 1, 4], Element: 1 Output: 3

let array = [1, 2, 1, 3, 1, 4];
let count = array.filter(n => n === 1).length;

console.log(count); 

console.log("-----------------------");

// 13. Sum of even numbers using reduce. Input: [1, 2, 3, 4, 5, 6] Output: 12

let nums = [1, 2, 3, 4, 5, 6];
let sumEven = nums.reduce((acc, num) => num % 2 === 0 ? acc + num : acc, 0);

console.log(sumEven); 
console.log("-----------------------");

// 14. Check if string is palindrome. Input: "madam" Output: true

let str = "madam";
let isPalindrome = str === str.split('').reverse().join('');

console.log(isPalindrome); 
console.log("-----------------------");

// 15. Return grade based on marks using switch. Input: Marks: 85 Output: B

let marks = 85;
let grade = "";

switch (true) {
  case (marks >= 90): grade = "A"; break;
  case (marks >= 80): grade = "B"; break;
  case (marks >= 70): grade = "C"; break;
  default: grade = "F";
}

console.log(grade); 

console.log("-----------------------");

// Test re-declaring a variable. Input: let x = 10; var x = 20;
// 16. Output: SyntaxError

let X = 10;
var x = 20; 
console.log("-----------------------");

// 17. Remove duplicates from array without Set. Input: [1, 2, 2, 3, 4, 1] Output: [1, 2, 3, 4]

let arrs = [1, 2, 2, 3, 4, 1];
let unique = [];

for (let num of arrs) {
  if (!unique.includes(num)) {
    unique.push(num);
  }
}

console.log(unique); 
console.log("-----------------------");

// 18. Slice first 3 elements of array. Input: [10, 20, 30, 40, 50] Output: [10, 20, 30]

let arrys = [10, 20, 30, 40, 50];
console.log(arrys.slice(0, 3)); 
console.log("-----------------------");

// 19. Find intersection of two arrays. Input: [1, 2, 3] and [2, 3, 4] Output: [2, 3]

let a = [1, 2, 3];
let b = [2, 3, 4];
let result = a.filter(val => b.includes(val));

console.log(result); 
console.log("-----------------------");

// 20. Reverse array using while loop (in-place). Input: [1, 2, 3, 4] Output: [4, 3, 2, 1]

let arrr = [1, 2, 3, 4];
let i = 0, j = arrr.length - 1;

while (i < j) {
  [arrr[i], arrr[j]] = [arrr[j], arrr[i]];
  i++; j--;
}

console.log(arrr); 
console.log("-----------------------");

// 21. Check if all elements in an array are positive (use flag variable). Input: [1, 4, 6, 9] Output: true
// Use a flag set to true, and turn it false if a negative number is found in loop.

let arra = [1, 4, 6, 9];
let allPositive = true;

for (let num of arra) {
  if (num < 0) {
    allPositive = false;
    break;
  }
}

console.log(allPositive); 
console.log("-----------------------");

// 22. Check if a string has both uppercase and lowercase letters. Input: "HelloWorld" Output: true
// Use two flags: hasUpper and hasLower.

let strs = "HelloWorld";
let hasUpper = false;
let hasLower = false;

for (let ch of str) {
  if (ch >= 'A' && ch <= 'Z') hasUpper = true;
  if (ch >= 'a' && ch <= 'z') hasLower = true;
}

console.log(hasUpper && hasLower); 
console.log("-----------------------");

// 23. Determine if a number is prime using flag inside loop. Input: 13 Output: true
// Set flag to false if any divisor is found in loop.

let num = 13;
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime); 
console.log("-----------------------");

// 24. Check if an array is sorted in ascending order using flag. Input: [2, 5, 8, 9] Output: true
// Set flag false if any element is greater than next.

let arr = [2, 5, 8, 9];
let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    isSorted = false;
    break;
  }
}

console.log(isSorted); 
console.log("-----------------------");

// 25. Check if a word has repeating characters using flag. Input: "coding" Output: false
// Use a flag and object/map to track character repetition.

let word = "coding";
let seen = {};
let hasRepeat = false;

for (let ch of word) {
  if (seen[ch]) {
    hasRepeat = true;
    break;
  }
  seen[ch] = true;
}

console.log(hasRepeat); 
console.log("-----------------------");

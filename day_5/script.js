// do while
// Q .1Print number from 1 - 50

let i = 1;

do {
    console.log(i)
    i++;
} while ( i <= 50)

// Q.2 Print count of even numbers from 1- 100

let num = 1;
let count = 0;
do {
  if (num % 2 == 0) {
    count++;
  }
  num++;
} while (num <= 100);

console.log( count, " even count");


// break 
// Q 1 - 20, print count of even numbers  , and if count goes above 5 then break loop

let countt = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    if (countt >= 5) {
      break;
    }
    countt++;
  }
}
console.log(countt, "use break");

// continue
for (let i = 1; i <= 10; i++) {
  if (i == 5 ||  i == 1) {
    continue;
  }
  console.log(i);
}
  
// arr
let allUserAge = [1, 2, 3, 4, 5];
console.log(allUserAge, "allUserAge");
console.log(allUserAge[0], "allUserAge[0]");
console.log(allUserAge[3], "allUserAge[3]");
console.log(allUserAge.length);
console.log(allUserAge[Math.round((allUserAge.length - 1) / 2)]); //math.round use

// push , pop , deletedNumber
var numbers = [1, 2, 3, 4, 5];
numbers.push(6); //push
numbers.pop( ); //pop
let deletedNumber = numbers.pop();
console.log(numbers, "numbers", deletedNumber, "deletedNumber");

// shift , unshift
var numbers = [1, 2, 3 , 4 , 5 ];
numbers.shift();
numbers.shift();
numbers.unshift(4);
console.log(numbers, "use shift, unshift ");

//at
var numbers = [1, 2, 3];

console.log(numbers[0]);
console.log(numbers.at(0));


//concat
var numbers1 = [1, 2, 3];

var numbers2 = [4, 5, 6];

var nums3 = numbers1.concat(numbers2);
console.log(nums3);

//indexof
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;
console.log(isLargeNumber, "isLargeNumber");
console.log(array1.indexOf(8));

// findIndex
var nums = [11, 22, 33];

console.log(nums.findIndex(num => num === 11));


// slice

const animals = ["ant", "bison", "camel", "duck", "elephant"];

var newArray = animals.slice(2);
console.log(newArray);

var newArray = animals.slice(-1);
console.log(newArray);


//splice
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "feb");
months.splice(1, 1, "feb");
console.log(months);

//sort
const month = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(month);

const array = [1, 30, 4, 21, 2];
array1.sort();
console.log(array);


const arr = [1, 30, 4, 21, 100000];
array1.sort((a, b) => a - b);
console.log(arr);

// reversedItems 
const items = [1, 2, 3];
console.log(items); 

const reversedItems = items.toReversed();
console.log(reversedItems); 



// string

const array2 = [1, 2, "a", "1a"];

console.log(array2.toString());



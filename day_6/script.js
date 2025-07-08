var number = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9];
let oddCount = 0;
for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 == 1) {
    oddCount++;
  }
}
console.log(oddCount, "oddCount");
console.log("-----------------------");


let usersname= ["A", "B", "C", "D", "E", "F", "G",];
let targetname = "E";
for (let i = usersname.length - 1; i >= 0; i--) {
  if (targetname == usersname[i]) {
    console.log(i);
    break;
  }
}

console.log("-----------------------");


//map

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
console.log(doubled); 

console.log("-----------------------");


// foreach

let fruits = ['apple', 'banana', 'mango'];
fruits.forEach(fruit => console.log(fruit));

console.log("-----------------------");


// fitler

let ages = [10, 18, 22, 15];
let adults = ages.filter(a => a >= 18);
console.log(adults); 
console.log("-----------------------");


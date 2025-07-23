// 1 .Closure

function outer() {
    let name = "Jyoti";

    function inner() {
        console.log("Hello, " + name);
    }
    return inner;
}
const greet = outer();
greet();

// Example

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}
const add = counter();
add();
add();
add(); 

// 2.Inheritance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, course) {
        super(name, age);

        this.course = course;
    }

    study() {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}
const jyoti = new Student("Jyoti", 21, "BSc IT");

jyoti.introduce();
jyoti.study();

//3. 2D Array

// spiral Array
const arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let top = 0;
let bottom = arr.length - 1;
let left = 0;
let right = arr[0].length - 1;

while (top <= bottom && left <= right) {

    for (let i = left; i <= right; i++) {
        console.log(arr[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
        console.log(arr[i][right]);
    }
    right--;

    if (top <= bottom) {
        for (let i = right; i >= left; i--) {
            console.log(arr[bottom][i]);
        }
        bottom--;
    }

    if (left <= right) {
        for (let i = bottom; i >= top; i--) {
            console.log(arr[i][left]);
        }
        left++;
    }
}

//  print N pattern

const arry1 =
    [[1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]]

let n = arry1.length;

for (let i = 0; i < n; i++) {
    console.log(arry1[i][0]);
}

for (let i = 1; i < n - 1; i++) {
    console.log(arry1[n - 1 - i][i]);
}

for (let i = 0; i < n; i++) {
    console.log(arry1[i][n - 1]);
}


//  print Z pattern

const arry2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let a = arry2.length;

for (let i = 0; i < a; i++) {
    console.log(arry2[0][i]);
}

for (let i = 1; i < a - 1; i++) {
    console.log(arry2[i][a - 1 - i]);
}


for (let i = 0; i < a; i++) {
    console.log(arry2[a - 1][i]);
}


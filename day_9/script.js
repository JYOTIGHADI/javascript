// function declration

function Greet() {
  console.log("Hello world!");
}
Greet();
console.log("-----------------------");

// function expression

const Greeeting = function () {
  console.log("hello everyone");
};
Greeeting();
console.log("-----------------------");

function Addition(num1 = 5, num2 = 10) {
  console.log(num1 + num2);
}
Addition(3 ,9);
console.log("-----------------------");

function Greeting(name = "Awdiz") {
  console.log("Hi", name);
}
Greeting("Jyoti");
console.log("-----------------------");

// Arrow function

const addition = (num1, num2) => {
  console.log(num1 + num2);
};
addition(8 , 2);
console.log("-----------------------");

// Object  { key1 : value1 , key2 : value2, key3 : value3 }


var info = { name: "Awdiz",
            age: 10,
            course: { name: "Full stack", batch: 1 }
    };

console.log(info.name);
console.log(info.age);
console.log(info.course.name)
console.log(info.course.batch)
console.log("-----------------------");

console.log(info["name"]);
console.log(info["age"]);

info.name = "Jyoti";
info.surname = " Ghadi";
info["age"] = 21;

delete info.age;
console.log(info);
console.log("-----------------------");

// array loop

const data = { name: "Awdiz", age: 10, location: "Vashi" };

for (let key in data) {
  console.log(key, "key", data[key]);
}
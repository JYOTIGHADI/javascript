// this
// contrcutor function
// new
// class
// ls ss cookies
// try catch finally
// async await

// this

// function data(user1, user2) {
//   console.log(user1, user2);
// }

// data("Virat", "Rohit");

const data = {
  name: "Awdiz",
  surname: "Insitute",
  greeting: function () {
    console.log(data.name, "data.name,");
    console.log("name", this.name);
    console.log("surname", this.surname);
  },
};

// console.log(data.greeting, "data.greeting");
console.log(data.greeting(), "data.greeting()");



















function admission(name, surname, number, email) {
//   console.log(name, surname, number, email);
  this.name = name;
  this.surname = surname;
  this.number = number;
  this.email = email;
}

const user1 = new admission("Virat", "Kohli", 12345, "virat@gmail.com");
console.log(user1.name);
console.log(user1.surname);
console.log(user1.number);
console.log(user1.email);

const user2 = new admission("Rohit", "sHARMA", 87623, "rohit@gmail.com");
console.log(user2.name);
console.log(user2.surname);
console.log(user2.number);
console.log(user2.email);


























class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  teach() {
    console.log(this.name, "Teacehes", this.subject);
  }
}

const teacher1 = new Teacher("Sagar", "HTML");
console.log(teacher1,"teacher1")
console.log(teacher1.name, "name");
console.log(teacher1.subject, "subject");
console.log(teacher1.teach(), "teach");

const teacher2 = new Teacher("Swaraj", "JavaScript");
console.log(teacher2,"teacher2")
console.log(teacher2.name, "name");
console.log(teacher2.subject, "subject");
console.log(teacher2.teach(), "teach");














try {
//   let num = 10;
//   let result = num / 0;
//   console.log(result, "result");
    const num = 10;
    num = 20;
} catch (error) {
  console.log("error in catch", error);
} finally {
  console.log("Finally loading will stop");
// }









// async await
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("Products");
      reject("Products");
    }, 5000);
  });
}

// function data() {
//   try {
//     const result = fetchData(); //waiting for 5 sec
//     console.log(result, "result");
//   } catch (error) {
//     console.log(error, "error");
//   }
// }

async function data() {
  try {
    const result = await fetchData(); //waiting for 5 sec
    console.log(result, "result");
  } catch (error) {
    console.log(error, "error");
  }
}
data();
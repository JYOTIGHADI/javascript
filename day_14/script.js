// localStorage

localStorage.setItem("token", "mytoken");

console.log(localStorage.getItem("token"), "getitem");

localStorage.removeItem("token")

localStorage.clear();


// sessionStorage

sessionStorage.setItem("token", "mytoken");

console.log(sessionStorage.getItem("token"))

sessionStorage.removeItem("token")

sessionStorage.clear();

// nested for loop

// Q . 1  
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
  let res = "";
  for (let j = 1; j <= i; j++) {
    res += "* ";
    console.log(res);
  }
  console.log(res);
}

// 1 st iteration

// i = 1 ; i <= 5 ; 1 <=  5 true
// j = 1; j <= i ; 1 <= 1 true
// res += "* ";
// res = "* "
// j++ j 2
// j <= i; ; 2 <= 1false
// res = "* "

// 2nd iteration

// i = 2 ; i <= 5 ; 2 <=  5 true
// j = 1; j <= i ; 1 <= 2 true
// res += "* ";
// res = "* "
// j++ j 2
// j <= i; ; 2 <= 2 true
// res += "* ";
// res = "* * "
// j++ 3
// j <= i; 3 <= 2 false

// 3rd iteration

// i = 3 ; i <= 5 ; 3 <=  5 true
// j = 1; j <= i ; 1 <= 3 true
// res += "* ";
// res = "* "
// j++ j 2
// j <= i; ; 2 <= 2 true
// res += "* ";
// res = "* * "
// j++ 3
// j <= i; 3 <= 3 true
// res += "* ";
// res = "* * * "

// Q . 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
    let res = "";
    for (let j = 1; j <= i; j++) {
      res += j + " ";
    }
    console.log(res);
  }


// Q . 3
// 2
// 2 4
// 2 4 6
// 2 4 6 8
// 2 4 6 8 10

for (let i = 1; i <= 5; i++) {
  let res = "";
  for (let j = 1; j <= i; j++) {
    res += j * 2 + " ";
  }
  console.log(res);
}

// 1st ietration 

// i = 1,i <= 5; 1 <= 5 true 
// j = 1; j <= i ; 1 <= 1  trur 
// res += i * 2 
// res = "2"


// 2nd ietration 

// i = 2,i <= 5; 2 <= 5 true 
// j = 1; j <= i ; 1 <= 2  true
// res += j * 2 
// res = "2"

// j = 2; j <= i ; 2 <= 2  true
// res += j * 2
// res = "2 4"
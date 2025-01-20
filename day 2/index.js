// Datatypes - string, number, boolean
// varibles - var , let , const
// hoisting
// scopes
// operators comprision



console.log(2 == 2 && 2 == 2 && 2 == 2);

console.log(2 == 3 || 2 == 3 || 2 == 3);

// true false

// arthemtic operator

var number = 100;
number++;
number = number + 1;
number += 34;
console.log(number);

var number = 100;
number = number - 1;
number--;
number -= 1;
console.log(number);


console.log(16 % 2 == 0);



if(condition) { 2 == 3
            1
} else if(condition){ 2 == 3
     2
} else if(condition){
     3
} else {
     4
}

if (2 == 2) 
    {
  console.log("Given numbers are same, inside if.");
} else if (2 == 3)
     {
  console.log("Given numbers are same, inside else if.");
} else 
{
  console.log("None of conditions are same, inside else.");
}

console.log("Outside of conditional statement")

var userEnteredNumber = 3234;

if (userEnteredNumber % 2 == 1) {
  console.log("Provided Number is odd.");
} else {
  console.log("Provided Number is even.");
}

var userAge = 14;

if (userAge > 18 && userAge <= 80) {
  console.log("You are allowed for DL.");
} else if (userAge < 18 || userAge > 80) {
  console.log("You are NOt allowed for DL and LL.");
} else {
  console.log("LL.");
}

if (userAge == 18) {
  console.log("LL.");
} else if (userAge > 18 && userAge <= 80) {
  console.log("You are allowed for DL.");
} else {
  console.log("You are NOt allowed for DL and LL.");
}

if (userAge > 18) {
  console.log("You are allowed for DL.");
} else if (userAge == 18) {
  console.log("You are allowed for LL.");
} else {
  console.log("You are not allowed for LL and DL.");
}

console.log(2 <= 2);

console.log(2 >= 2);



switch( key  ){
    case 1:
         1
    case 2:
         2
    case 3:
         3
    default :
         last
}

var userSelectedFruit = "Strawberry";

switch (userSelectedFruit) {
  case "Apple":
    console.log("User selected fruit is Apple.");
    break;
  case "Strawberry":
    console.log("User selected fruit is Strawberry.");
    break;
  case "Banana":
    console.log("User selected fruit is Banana.");
    break;
  default:
    console.log("None of fruit is available..");
}



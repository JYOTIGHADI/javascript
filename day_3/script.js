// Conditional statement
var age = 15;

if (age == 18) {
  console.log("You are eligible for learning license");
} 
else if (age > 18 && age <= 80) {
  console.log("You are eligibe for DL.");
} 
else {
  console.log("You are not eligible for DL.");
}

//switch 
var userSelectedFruit = "berry";

switch (userSelectedFruit) {
  case "Apple":
    console.log("You have selected Apple.");
    break;
  case "Banana":
    console.log("You have selected Banana.");
    break;
  case "Strawberry":
    console.log("You have selected Strawberry.");
    break;
    case "berry":
    console.log("You have selected berry.");
    break;
    case "orange":
    console.log("You have selected Apple.");
    break;
  default:
    console.log("You have selected none of available fruit.");
    break;
}
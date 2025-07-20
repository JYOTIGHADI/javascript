// Linear search;
// Binary search;

var nums = [1, 2, 3, 4, 5, 6, 7];
var target = 7;

for (let i = 0; i < nums.length; i++) {
  if (target == nums[i]) {
    console.log(i, "result");
  }
  console.log(i);
}












var nums = [1, 2, 3, 4, 5, 6, 7, 8];
var target = 8;

function Binary(nums, target) {
  let left = 0;
  let right = nums.length - 1; /// 7  3 = 1 -> 0

  while (left <= right) {
    let middleIndex = Math.round((left + right) / 2); // 4,  0 + 3  / 2 - 2
    // 0 + 1 1/ 2 - 1
    // 0 + 0 0 / 2
    //  0
    let middleElement = nums[middleIndex]; // 5  3 2 1

    if (target == middleElement) {
      //7 == 5;
      return middleIndex;
    } else if (target > middleElement) {
      // 7 > 5;
      left = middleIndex + 1;
    } else if (target < middleElement) {
      right = middleIndex - 1; //4 - 1  - 3 , 2 - 1
      //   1 - 1 =0
    }
  }
}

console.log(Binary(nums, target));

















// Event Loop

// call stack 
// web api
// callback queue 
// event loop 

console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
setTimeout(() => {
  console.log(4);
}, 5000);
setTimeout(() => {
  console.log(5);
}, 1000);
console.log(3);

// 1
// 3
// 5
// 2
// 4
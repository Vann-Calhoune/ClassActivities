const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let pops = nums.pop();
let pops2 = nums.pop();
// remove each of the first two items with shift(), saving each item to a variable
let shifts = nums.shift();
let shifts2 = nums.shift();
// use push and unshift to add the variables back to the array in numerical order, 0-6
let push1 = nums.push(5);
let push2 = nums.push(6);

let unshift1 = nums.unshift(1);
let unshift2 = nums.unshift(0);
console.log(nums);

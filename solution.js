//Write a JavaScript program to compute the sum of an array of integers

//const array = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (i = 0; i <= array.length; i++) {
//   sum += i;
// }
// console.log(sum);

function arraySum(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + arraySum(array.slice(1));
  }
}
const array = [1, 2, 3, 4, 5, 6];
console.log(arraySum(array)); // return 21

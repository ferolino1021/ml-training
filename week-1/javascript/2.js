/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */

function Array(arr){
    let sum = 0

    for (let num of arr){
        sum += num ;
    }
    return sum;
}
console.log(Array([1,2,3]));

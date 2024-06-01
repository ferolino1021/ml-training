/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */
function array(arr: number[]): number {
    return arr.reduce((acc, num) => acc + num, 0);
}
let numb = [1, 2, 3, 4, 5];
console.log(array(numb));

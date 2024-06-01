/**
 * Write a function that accepts an array of numbers and displays the highest and lowest numbers in the array.
 * @param {number[]} arr The array of numbers.
 * @return {string} The highest and lowest numbers in the array.
 *
 * Example array: [5, 2, 8, 1, 9, 3]
 * Expected output: "The lowest number is 1 and the highest number is 9."
 */
function finders(arr) {
    arr.sort((a, b) => a - b);

    const lowest = arr[0];
    const highest = arr[arr.length - 1];

    return `The lowest number is ${lowest} and the highest number is ${highest}.`;
}

let numbers = [1,2,3,9,8,4,6,5,7];
console.log(finders(numbers));


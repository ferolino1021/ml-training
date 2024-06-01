/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is less than 0
 * @param {number} num The number to check.
 * @throws {Error} If the number is not a positive integer.
 */
function Positive(num) {
    if (num < 0) {
        throw new Error('The provided number is less than 0.');
    }
}
try {
    Positive(-5);
} 
catch (error) {
    console.error(error.message);
}
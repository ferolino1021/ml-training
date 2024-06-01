/**
 * Write a function that accepts 2 numbers as parameters and throws a custom 'Error' if the second number is 0
 * @param {number} num1 The first number to check.
 * @param {number} num2 The second number to check.
 * @throws {Error} If the second number is 0.
 */
function Zeros(num1: number, num2: number): void {
    if (num2 === 0) {
        throw new Error('The second number cannot be 0.');
    }
}
try {
    Zeros(10, 5);
    Zeros(10, 0);
}
catch (error) {
    console.error(error.message);
}
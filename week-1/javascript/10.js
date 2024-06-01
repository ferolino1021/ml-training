/**
 * Write a function that accepts 2 numbers as parameters and throws a custom 'Error' if the second number is 0
 * @param {number} num1 The first number to check.
 * @param {number} num2 The second number to check.
 * @throws {Error} If the second number is 0.
 */
function Zero(num1, num2) {
    if (num2 === 0) {
        throw new Error('The second number cannot be zero.');
    }
}

try {
    Zero(10, 0);
} catch (e) {
    console.error(e.message);
}

try {
    Zero(10, 5);
    console.log('The second number is not zero.');
} catch (e) {
    console.error(e.message);
}
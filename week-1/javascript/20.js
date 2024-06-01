/**
 * Write a function that accepts a string as input and swaps the case of each character in the string.
 *
 * Example:
 * - swapCase("Hello World") should return "hELLO wORLD"
 *
 * @param {string} str
 * @returns {string}
 */
function swapCase(str) {
    let swap = '';

    for (let char of str) {
        if (char === char.toUpperCase()) {
            swap += char.toLowerCase();
        } else {
            swap += char.toUpperCase();
        }
    }

    return swap;
}

console.log(swapCase("Hello World"));
console.log(swapCase("JavaScript"));
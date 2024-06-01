/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels removed.
 */

function Vowels(str) {
    const vowels = 'aeiouAEIOU';
    let result = '';
    for (let char of str) {
        if (vowels.includes(char)) {
            result += char;
        }
    }
    return result;
}
console.log(Vowels('Hello World!'));
/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels removed.
 */
function Vowels(str: string): string {
    const vowel = /[aeiou]/gi;
    const vowelArray = str.match(vowel);
    if (vowelArray) {
        return vowelArray.join('');
    } else {
        return '';
    }
}
let str = "Hello World";
console.log(Vowels(str));

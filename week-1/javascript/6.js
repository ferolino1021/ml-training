/**
 * Write a function that converts Fahrenheit to Celsius.
 * Expected output: 140°F = 60°C.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */
function convert(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
let fahrenheit = 60;
const celsius = convert(fahrenheit);
console.log(`${fahrenheit}°F = ${celsius}°C`);
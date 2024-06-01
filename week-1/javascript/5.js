/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */

function convert(celsius) {
    return (celsius * 9/5) + 32;
}
let celsius = 60;
const fahrenheit = convert(celsius);
console.log(`${celsius}°C = ${fahrenheit}°F`);
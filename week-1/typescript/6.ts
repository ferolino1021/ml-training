/**
 * Write a function that converts Fahrenheit to Celsius.
 * Expected output: 140°F = 60°C.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */
function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
}

const fahrenheitTemp = 60;
const celsiusTemp = fahrenheitToCelsius(fahrenheitTemp);
console.log(`${fahrenheitTemp}°F = ${celsiusTemp.toFixed(1)}°C`);

/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */
function converted(celsius: number): number {
    return (celsius * 9/5) + 32;
}

let celsiuss = 60;
const fahrenheited = converted(celsiuss);
console.log(`${celsiuss}°C = ${fahrenheited}°F`);

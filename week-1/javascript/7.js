/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */
function ewww(number) 
{
  if (!number.Integer(number)) 
  {
    throw new Error('Its not an integer');
  }
}
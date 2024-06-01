/**
 * Write a function that converts HTML entities to their corresponding characters.
 * @param {string} str The string to convert.
 * @return {string} The string with HTML entities converted to their corresponding characters.
 */

function convertsHtml(str: string): string {
  // ENTITY OBJECT
  const entities: { [key: string]: string } = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&apos;": "'",
  };
  return str.replace(/[&<>"']/g, entry => entities[entry]);
}

const inputs: string = 'This is a & > <  & ';
console.log(convertsHtml(inputs));

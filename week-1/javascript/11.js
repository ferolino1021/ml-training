/**
 * Write a function that converts HTML entities to their corresponding characters.
 * @param {string} str The string to convert.
 * @return {string} The string with HTML entities converted to their corresponding characters.
 */
function convertHtml(str) {
  // ENTITY OBJECT
  const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
  };
  return str.replace(/[&<>"']/g, entry => entities[entry]);
}
const input = 'This is a & > <  & ';
console.log(convertHtml(input));
/**
 * Write a function that merges two arrays into a single array and removes duplicates.
 *
 * Example:
 * - merge([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4]
 * - merge([1, 2, 3], [3, 4, 5]) should return [1, 2, 3, 4, 5]
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

function merge(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const uniqueArray = mergedArray.filter((item, index) => mergedArray.indexOf(item) === index);
    
    
    return uniqueArray;
}

console.log(merge([1, 2, 3], [2, 3, 4])); 
console.log(merge([1, 2, 3], [3, 4, 5]));

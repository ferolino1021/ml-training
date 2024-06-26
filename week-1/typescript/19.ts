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
function merge(arr1: number[], arr2: number[]): number[] {
    const mergedArray: number[] = arr1.concat(arr2);
    const uniqueArray: number[] = Array.from(new Set(mergedArray));
    
    return uniqueArray;
}
console.log(merge([1, 2, 3], [2, 3, 4]));
console.log(merge([1, 2, 3], [3, 4, 5]));
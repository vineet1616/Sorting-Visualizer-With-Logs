"use strict"

/**
 * Swap the ith and the jth elements of array
 * @param {Number[]} arr The array which has the values to swap
 * @param {Number} i Index of the first value to swap
 * @param {Number} j Index of the second value to swap
 */
export default function swapForCalculation(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
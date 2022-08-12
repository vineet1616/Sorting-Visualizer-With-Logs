"use strict"

/**
 * Check if arr[i] is smaller than arr[j]
 * @param {Number[]} arr The array which has the values to compare
 * @param {Number} i Index of the first value to compare
 * @param {Number} j Index of the second value to compare
 * @returns {Boolean} true if the ith element is smaller than the jth element
 */
export default function isSmallerForCalculation(arr, i, j) {
    if (arr[i] < arr[j]) {
        return true;
    }
    else {
        return false;
    }
}
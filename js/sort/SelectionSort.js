"use strict"

import reset2DivsColor from "../animation/Reset2DivsColor.js";
import isSmallerAnimation from "../animation/CompareAnimation.js";
import isSmallerForCalculation from "./CompareForCalculation.js";
import swapAnimation from "../animation/SwapAnimation.js";
import swapForCalculation from "./SwapForCalculation.js";
import setDivGreen from "../animation/SetDivGreen.js"

/**
 * Sort the array using Selection Sort
 * 
 * Selection Sort selects the smallest value among the unsorted elements of the list and swaps it with the value at its appropriate position into the list. After each pass, it selects the current smallest element, and swaps it into place. This pass through the list is repeated until the list is sorted.
 * @param {Number[]} arr The array to sort
 * @returns {Array} An array of animation functions with their respective args used to animate Selection Sort
 */
export default function selectionSort(arr) {
    /** Store the animation functions with their respective args */
    let animationsArr = new Array();

    /** Length of arr */
    let n = arr.length;

    // First loop of itr will run only for n - 1 times because for n - 1 iterations, n - 1 smallest elements of array will be placed at their appropriate positions (in the sorted subarray), leaving only one option for the remaining value.
    for (let i = 0; i < n - 1; i++) {
        // Second loop of j, will only run for the elements from i + 1 to n - 1 indexes which is the unsorted portion of the array. We will compare the value of the element at minidx index with the jth index element.
        let minidx = i;
        for (let j = i + 1; j < n; j++) {
            // While comparing values inside the 'for' loop, if the value of jth index element is smaller than the minidx index element then we re-assign/update the value of the minidx as we have found a new minimum element in the unsorted portion of the array i.e. from i + 1 to n - 1 indexes
            animationsArr.push([isSmallerAnimation, [j, minidx, arr[j], arr[minidx]]]);
            animationsArr.push([reset2DivsColor, [j, minidx]]);
            if (isSmallerForCalculation(arr, j, minidx)) {
                minidx = j;
            }
        }
        // After each iteration, we find the ith smallest element and swap it with the ith element of the array i.e. we add the ith smallest element to the sorted subarray, at its sorted position
        animationsArr.push([swapAnimation, [i, minidx, arr[i], arr[minidx]]]); // animate the swapping of divs and give them a red color
        animationsArr.push([reset2DivsColor, [i, minidx]]); // reset the divs' color after the swapping is shown
        swapForCalculation(arr, i, minidx);
        animationsArr.push([setDivGreen, [i, arr[i]]]); // make the ith smallest div green as it has reached its sorted position
    }
    animationsArr.push([setDivGreen, [n - 1, arr[n - 1]]]); // make the n - 1th div green as it has reached its sorted position

    return animationsArr; // return the array with the animation functions and their respective args
}
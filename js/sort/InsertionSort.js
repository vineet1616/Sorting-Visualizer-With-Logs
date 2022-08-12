"use strict"

import reset2DivsColor from "../animation/Reset2DivsColor.js";
import isSmallerAnimation from "../animation/CompareAnimation.js";
import isSmallerForCalculation from "./CompareForCalculation.js";
import swapAnimation from "../animation/SwapAnimation.js";
import swapForCalculation from "./SwapForCalculation.js";

/**
 * Sort the array using Insertion Sort
 * 
 * Insertion Sort repeatedly steps through the list. After each pass through the list, it inserts an unsorted element at its suitable place. The pass through the list is repeated until the list is sorted.
 * @param {Number[]} arr The array to sort
 * @returns {Array} An array of animation functions with their respective args used to animate Insertion Sort
 */
export default function insertionSort(arr) {
    /** Store the animation functions with their respective args */
    let animationsArr = new Array();

    /**
     * The first element is the initial sorted subarray
     * After each iteration of the first loop, the sorted subarray will grow by 1 as we will add the ith element in the sorted subarray
     */
    for (let i = 1; i < arr.length; i++) {
        // Second loop of j will find the correct position of the current (ith) element in the sorted subarray by comparing it with all the elements of the sorted subarray
        for (let j = i - 1; j >= 0; j--) {
            // While comparing values inside the loop, if the value of (j+1)th index element is smaller than jth index element then we swap the elements.
            // We start from the largest element in the sorted subarray and keep swapping them with the current (ith) element till the current (ith) element reaches its appropriate position in the sorted subarray

            animationsArr.push([isSmallerAnimation, [j + 1, j, arr[j + 1], arr[j]]]); // add the animation function to show comparsion through the blue color divs
            animationsArr.push([reset2DivsColor, [j + 1, j]]); // reset the color after the comparison is shown

            if (isSmallerForCalculation(arr, j + 1, j)) {
                animationsArr.push([swapAnimation, [j + 1, j, arr[j + 1], arr[j]]]); // animate the swapping of divs and give them a red color
                animationsArr.push([reset2DivsColor, [j + 1, j]]); // reset the divs' color after the swapping is shown
                swapForCalculation(arr, j + 1, j);
            }
            else {
                // The ith element has reached its appropriate position i.e. it is greater that the element to the left of itself in the sorted subarray
                break;
            }
        }
    }

    return animationsArr; // return the array with the animation functions and their respective args
}
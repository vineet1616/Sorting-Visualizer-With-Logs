"use strict"

import reset2DivsColor from "../animation/Reset2DivsColor.js";
import isSmallerAnimation from "../animation/CompareAnimation.js";
import isSmallerForCalculation from "./CompareForCalculation.js";
import swapAnimation from "../animation/SwapAnimation.js";
import swapForCalculation from "./SwapForCalculation.js";
import setDivGreen from "../animation/SetDivGreen.js"

/**
 * Sort the array using Bubble Sort
 * 
 * Bubble Sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. After each pass, the largest element among the unsorted elements bubbles up i.e. it is placed at the end of the list. The pass through the list is repeated until the list is sorted.
 * @param {Number[]} arr The array to sort
 * @returns {Array} An array of animation functions with their respective args used to animate Bubble Sort
 */
export default function bubbleSort(arr) {
    /** Store the animation functions with their respective args */
    let animationsArr = new Array();

    /** Length of arr */
    let n = arr.length;

    // First loop of itr, will run only for n - 1 times because for n - 1 iterations, n - 1 largest elements of array will be placed at right positions in the sorted subarray.
    for (let itr = 1; itr < n; itr++) {
        // Second loop of j, will only run for the first n - 1 elements of the array, comparing the value of the jth index element with (j + 1)th index element. Because when the loop will run for (n - 1)th index element nth element will automatically be taken into account.
        for (let j = 0; j < n - itr; j++) {
            // While comparing values inside the loop, if the value of (j+1)th index element is smaller than jth index element then we swap the elements.

            animationsArr.push([isSmallerAnimation, [j + 1, j, arr[j + 1], arr[j]]]); // add the animation function to show comparsion through the blue color divs
            animationsArr.push([reset2DivsColor, [j + 1, j]]); // reset the color after the comparison is shown
            if (isSmallerForCalculation(arr, j + 1, j) == true) {
                animationsArr.push([swapAnimation, [j + 1, j, arr[j + 1], arr[j]]]); // animate the swapping of divs and give them a red color
                animationsArr.push([reset2DivsColor, [j + 1, j]]); // reset the divs' color after the swapping is shown
                swapForCalculation(arr, j + 1, j);
            }
        }
        // After each pass, the largest element among the unsorted elements bubbles up i.e. it is placed at the end of the list.
        // The (n - itr)th element is added to the sorted subarray, at its sorted position
        animationsArr.push([setDivGreen, [n - itr, arr[n - itr]]]); // the value and div at position  arr[n - itr] has reached its sorted position, so color it green
    }
    animationsArr.push([setDivGreen, [0, arr[0]]]); // color the first div green as it has reached its sorted postion

    return animationsArr; // return the array with the animation functions and their respective args
}
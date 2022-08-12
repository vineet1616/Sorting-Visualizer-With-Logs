"use strict"

export default function generateRandomArr(size = 20, minVal = 1, maxVal = 40) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(randomIntFromInterval(minVal, maxVal));
    }
    return arr;
}

/**
 * Return a random number in the interval min-max (both included)
 * @param {Number} min The minimum value (inclusive) of the interval 
 * @param {Number} max The maximum value (inclusive) of the range 
 * @returns {Number} A random number between min and max (both included)
 */
function randomIntFromInterval(min, max) {
    max = max + 1;
    return Math.floor((Math.random() * (max - min) + min));
}
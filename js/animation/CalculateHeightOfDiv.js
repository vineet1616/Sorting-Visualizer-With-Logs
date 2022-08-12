"use strict"

/** minimum value of the array (used to calculte the relative height of the divs) */
let minVal;
/** maximum value of the array (used to calculte the relative height of the divs) */
let maxVal;

/**
 * Set the value of minVal: minimum value of the array (used to calculte the relative height of the divs)
 * @param {Number} value The value to set
 */
function setMinVal(value = 1) {
    minVal = value;
}

/**
 * Set the value of maxVal: maximum value of the array (used to calculte the relative height of the divs)
 * @param {Number} value The value to set
 */
function setMaxVal(value = 20) {
    maxVal = value;
}

/**
 * Calculate the relative height of the div in the range: 1vh to 20vh
 * @param {Number} valueOfDiv The value of the div whose relative height is to be calculated
 * @returns {String} Height of the div in vh
 */
function calculateHeightOfDiv(valueOfDiv) {
    /** Formula for Percentile
      * Percentile of "x" = (Number of Values Below "x" / Total Number of Values) × 100
      */

    /** percentile of arr[i] in the range: minVal to maxVal */
    let percentileOfArrI = ((valueOfDiv - minVal) / (maxVal - minVal + 1)) * 100;
    /** relative height of the div in the range: 1vh to 20vh */
    let heightStr = (20 + 1) * (percentileOfArrI / 100);
    heightStr = heightStr + 5; // increment the height by 5 so that divs at 0 percentile are also visible
    heightStr = heightStr + "vh"; // add the unit vh to the string

    return heightStr; // return the relative height of the div in the range: 1vh to 20vh
}

export { setMinVal, setMaxVal, calculateHeightOfDiv };
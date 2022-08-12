"use strict"

/**
 * Reset the color of the divs at the given indexes
 * @param {Number} i Index of the first div
 * @param {Number} j Index of the second div
 */
export default function reset2DivsColor(i, j) {
    /** div at the ith index */
    const divI = document.getElementById("arr-div-index-" + i);
    /** div at the jth index */
    const divJ = document.getElementById("arr-div-index-" + j);

    divI.setAttribute("class", "arr-div"); // remove the color class
    divJ.setAttribute("class", "arr-div"); // remove the color class
}
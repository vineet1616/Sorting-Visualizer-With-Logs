"use strict"

import scrollToBottom from "./ScrollNodeToBottom.js";
import { setMinVal, setMaxVal, calculateHeightOfDiv } from "./CalculateHeightOfDiv.js";

/** Log Section */
const logSection = document.getElementById("log-section");

/**
 * Swap the divs at the ith and the jth indexes
 * @param {Number} i Index of the first div
 * @param {Number} j Index of the second div
 * @param {Number} valueAtI Value of the ith div
 * @param {Number} valueAtJ Value of the jth div
 */
export default function swapAnimation(i, j, valueAtI, valueAtJ) {
    /** div at the ith index */
    const divI = document.getElementById("arr-div-index-" + i);
    /** div at the jth index */
    const divJ = document.getElementById("arr-div-index-" + j);

    divI.setAttribute("class", "arr-div red-div"); // add a class to color the div red
    divJ.setAttribute("class", "arr-div red-div"); // add a class to color the div red

    let pTag = document.createElement("p"); // create a <p> tag
    pTag.setAttribute("class", "red-background"); // add a class to color the div red
    pTag.innerHTML = "Swap " + valueAtI + " and " + valueAtJ;
    logSection.appendChild(pTag); // add the <p> tag to the Log Section

    divI.style.height = calculateHeightOfDiv(valueAtJ); // swap the height of the ith div with the height of the jth div
    divI.innerHTML = valueAtJ; // swap the value of the ith div with the value of the jth div

    divJ.style.height = calculateHeightOfDiv(valueAtI); // swap the height of the jth div with the height of the ith div
    divJ.innerHTML = valueAtI; // swap the value of the jth div with the value of the ith div

    // scroll to the bottom of the Log Section to see the new log
    scrollToBottom(logSection);
}
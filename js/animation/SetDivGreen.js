"use strict"

import scrollToBottom from "./ScrollNodeToBottom.js";

/** Log Section */
const logSection = document.getElementById("log-section");

/**
 * Set the background-color property to green of the given div
 * @param {Number} i Index of the div
 * @param {Number} valueAtI Value of the div
 */
export default function setDivGreen(i, valueAtI) {
    /** div at the ith index */
    const divI = document.getElementById("arr-div-index-" + i);
    divI.setAttribute("class", "arr-div green-div"); // add a class to color the div green

    let pTag1 = document.createElement("p"); // create a new <p> tag
    pTag1.innerHTML = valueAtI + " has reached its sorted position";
    pTag1.setAttribute("class", "green-background"); // add a class to color the <p> tag green
    logSection.appendChild(pTag1); // add the <p> tag to the Log Section

    // scroll to the bottom of the Log Section to see the new log
    scrollToBottom(logSection);
}
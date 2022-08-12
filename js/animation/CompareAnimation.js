"use strict"

import scrollToBottom from "./ScrollNodeToBottom.js";

/** Log Section */
const logSection = document.getElementById("log-section");

/**
 * Set the background-color property to blue of the divs being compared and add the appropriate log
 * @param {Number} i Index of the first div
 * @param {Number} j Index of the second div
 * @param {Number} valueAtI Value of the ith div
 * @param {Number} valueAtJ Value of the jth div
 */
export default function isSmallerAnimation(i, j, valueAtI, valueAtJ) {
    /** div at the ith index */
    const divI = document.getElementById("arr-div-index-" + i);
    /** div at the jth index */
    const divJ = document.getElementById("arr-div-index-" + j);

    // color the div as blue to show that the ith div is being compared to the jth div
    divI.setAttribute("class", "arr-div blue-div");
    divJ.setAttribute("class", "arr-div blue-div");

    // create a log
    let pTag = document.createElement("p");
    pTag.setAttribute("class", "blue-background margin-top-20px-bottom-5px");
    pTag.innerHTML = "Compare " + valueAtI + " and " + valueAtJ + " "; //<p>Compare 2 and 4 </p>

    if (valueAtI < valueAtJ) {
        pTag.innerHTML += "(" + valueAtI + " is smaller than " + valueAtJ + ")"; //<p>Compare 2 and 4 (2 is smaller that 4)</p>
        logSection.appendChild(pTag); // add the <p> tag to the Log Section
    }
    else {
        pTag.innerHTML += "(" + valueAtI + " is not smaller than " + valueAtJ + ")"; //<p>Compare 4 and 2 (4 is not smaller that 2)</p>
        logSection.appendChild(pTag); // add the <p> tag to the Log Section
    }

    // scroll to the bottom of the Log Section to see the new log
    scrollToBottom(logSection);
}
"use strict"

import scrollToBottom from "./ScrollNodeToBottom.js";
import { setMinVal, setMaxVal, calculateHeightOfDiv } from "./CalculateHeightOfDiv.js";

/** sorting visualizer section */
const sortingVisualizerSection = document.getElementById("sorting-visualizer-section");
/** Log Section */
const logSection = document.getElementById("log-section");

/**
 * Reset the Log Section to show only the title "Logs"
 */
function resetLogSection() {
    logSection.innerHTML = ""; // delete all the innerHTML of Log Section by making its innerHTML = ""

    const pTag = document.createElement("p"); // create a new <p> tag
    pTag.innerHTML = "Logs"; // <p>Logs</p>

    const hrTag = document.createElement("hr"); // create a new <hr> tag

    pTag.appendChild(hrTag); // <p>Logs <hr></p>

    logSection.appendChild(pTag); // add the <p>Logs <hr></p> to the Log Section

    // scroll to the bottom of the Log Section to see the new log
    scrollToBottom(logSection);
}

/**
 * Generate divs with their values
 * @param {Number[]} arr Array with the values of the divs
 */
export default function generateDivsFromArr(arr) {
    sortingVisualizerSection.innerHTML = ""; // clear the sorting visualizer section
    resetLogSection();  // reset the Log Section

    /** size of arr */
    const size = arr.length;

    for (let i = 0; i < size; i++) {
        const divElement = document.createElement("div"); // create a <div> tag
        divElement.setAttribute("id", "arr-div-index-" + i); // add the unique id used to identify the div
        divElement.setAttribute("class", "arr-div"); // add a class for styling the div
        divElement.style.height = calculateHeightOfDiv(arr[i]); // give the <div> a height according to its value
        divElement.innerHTML = arr[i]; // <div>value at arr[i]</div>
        sortingVisualizerSection.appendChild(divElement); // add the <div> tag to the sorting visualizer section
    }
}
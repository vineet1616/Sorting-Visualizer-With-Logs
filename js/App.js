"use strict"

import generateRandomArr from "./sort/GenerateRandomArr.js";
import { setMinVal, setMaxVal, calculateHeightOfDiv } from "./animation/CalculateHeightOfDiv.js";
import generateDivsFromArr from "./animation/GenerateDivsFromArr.js";
import bubbleSort from "./sort/BubbleSort.js";
import insertionSort from "./sort/InsertionSort.js";
import selectionSort from "./sort/SelectionSort.js";
import scrollToBottom from "./animation/ScrollNodeToBottom.js";
import reset2DivsColor from "./animation/Reset2DivsColor.js";
import isSmallerForCalculation from "./sort/CompareForCalculation.js";
import isSmallerAnimation from "./animation/CompareAnimation.js";
import swapForCalculation from "./sort/SwapForCalculation.js";
import swapAnimation from "./animation/SwapAnimation.js";
import setDivGreen from "./animation/SetDivGreen.js";
import { enableButtons, disableButtons, enableInputs, disableInputs } from "./animation/EnableDisableInputsAndButtons.js";

/** section that contains the current sorting algorithm's description */
const descriptionOfTheCurrentAlgorithm = document.getElementById("description-of-the-algorithm");
/** select tag with all the sorting algorithms as options */
const currentAlgorithm = document.getElementById("current-algorithm");
/** size input field */
const sizeInput = document.getElementById("size-of-the-array");
/** minimum value of the array input field */
const minValInput = document.getElementById("min-value-of-the-array");
/** maximum value of the array input field */
const maxValInput = document.getElementById("max-value-of-the-array");
/** speed of animation range input */
const animationSpeedInput = document.getElementById("animation-speed");
/** generate a new random array button */
const randomArrButton = document.getElementById("generate-random-array");
/** start visualization button */
const startButton = document.getElementById("start-visualization");
/** Log Section */
const logSection = document.getElementById("log-section");

/** which sorting algorithm the user has chosen */
let usersChoiceOfAlgorithm = currentAlgorithm.value;

/** Title of each algorithm (used to create an <h2> tag) */
const algorithmTitles = {
    "bubble-sort": "Bubble Sort",
    "insertion-sort": "Insertion Sort",
    "selection-sort": "Selection Sort"
};

/** default size of the array */
let defaultSize = 20;
/** default minimum value of the array */
let defaultMinVal = 1;
/** default maximum value of the array */
let defaultMaxVal = 20;

/** current size of the array */
let currentSize = (parseInt(sizeInput.value)) || defaultSize;
/** current minimum value of the array */
let currentMinVal = (parseInt(minValInput.value)) || defaultMinVal;
setMinVal(currentMinVal); // set the minVal used for calculating the heights of the divs
/** current maximum value of the array */
let currentMaxVal = (parseInt(maxValInput.value)) || defaultMaxVal;
setMaxVal(currentMaxVal); // set the maxVal used for calculating the heights of the divs

/** previous value of the size of the array */
let prevSize = currentSize;
/** previous value of the minimum value of the array */
let prevMinVal = currentMinVal;
/** previous value of the maximum value of the array */
let prevMaxVal = currentMaxVal;

/** animation speed */
let animationSpeed = parseInt(animationSpeedInput.value);

/** random arr which will be sorted */
let arr = generateRandomArr(currentSize, currentMinVal, currentMaxVal);

generateDivsFromArr(arr); // make the divs based on the random array

/** when the user changes their choice of the sorting algorithm, the description displayed should change */
currentAlgorithm.addEventListener("change", () => {
    usersChoiceOfAlgorithm = currentAlgorithm.value; // update the value to the users choice

    /** description of each sorting algorithm */
    const algorithmDescriptions = {
        "bubble-sort":
            "Bubble Sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. After each pass, the largest element among the unsorted elements bubbles up i.e. it is placed at the end of the list. The pass through the list is repeated until the list is sorted.",

        "insertion-sort":
            "Insertion Sort repeatedly steps through the list. After each pass through the list, it inserts an unsorted element at its suitable place. The pass through the list is repeated until the list is sorted.",

        "selection-sort":
            "Selection Sort selects the smallest value among the unsorted elements of the list and swaps it with the value at its appropriate position into the list. After each pass, it selects the current smallest element, and swaps it into place. This pass through the list is repeated until the list is sorted."
    };

    descriptionOfTheCurrentAlgorithm.innerHTML = ""; // reset the algorithm description div

    const h2Tag = document.createElement("h2"); // create an <h2> tag
    h2Tag.innerHTML = algorithmTitles[usersChoiceOfAlgorithm + ""]; // add the title of the current algorithm

    const pTag = document.createElement("p"); // create a <p> tag
    pTag.innerHTML = algorithmDescriptions[usersChoiceOfAlgorithm + ""]; // add the description of the current algorithm

    descriptionOfTheCurrentAlgorithm.appendChild(h2Tag); // add the <h2> tag to the algorithm description div
    descriptionOfTheCurrentAlgorithm.appendChild(pTag); // add the <p> tag to the algorithm description div
});

/** generate a new random array */
randomArrButton.addEventListener("click", () => {
    // if the user has given the values then update them or else assign the default values
    currentSize = (parseInt(sizeInput.value)) || defaultSize;
    currentMinVal = (parseInt(minValInput.value)) || defaultMinVal;
    setMinVal(currentMinVal); // set the minVal used for calculating the heights of the divs
    currentMaxVal = (parseInt(maxValInput.value)) || defaultMaxVal;
    setMaxVal(currentMaxVal); // set the maxVal used for calculating the heights of the divs

    // update the values of prevSize, prevMinVal, prevMaxVal to the new values
    prevSize = currentSize;
    prevMinVal = currentMinVal;
    prevMaxVal = currentMaxVal;

    arr = generateRandomArr(currentSize, currentMinVal, currentMaxVal); // generate a new random array

    generateDivsFromArr(arr); // make divs from the random array
});

/**
 * Store the animation functions and their respective args
 * 
 * animationsArr = [

        [function1, [parameter1, parameter2,....parameterN]],
        [function2, [parameter1, parameter2,....parameterN]],
                            .
                            .
                            .
                            .
        [functionN, [parameter1, parameter2,....parameterN]]
    ]
 */
let animationsArr = new Array();

/** start the visualization */
startButton.addEventListener("click", () => {
    // disable all the input fields and buttons to prevent altering of input values and multiple clicks
    disableInputs();
    disableButtons();

    // if the user has given the values then update them or else assign the default values
    currentSize = (parseInt(sizeInput.value)) || defaultSize;
    currentMinVal = (parseInt(minValInput.value)) || defaultMinVal;
    setMinVal(currentMinVal); setMinVal(currentMinVal); // set the minVal used for calculating the heights of the divs
    currentMaxVal = (parseInt(maxValInput.value)) || defaultMaxVal;
    setMaxVal(currentMaxVal); setMaxVal(currentMaxVal); // set the maxVal used for calculating the heights of the divs

    // if any value has changed i.e. currentVal != prevVal then update the values
    if (currentSize != prevSize || currentMinVal != prevMinVal || currentMaxVal != prevMaxVal) {
        // update the values of prevSize, prevMinVal, prevMaxVal to the new values
        prevSize = currentSize;
        prevMinVal = currentMinVal;
        prevMaxVal = currentMaxVal;

        arr = generateRandomArr(currentSize, currentMinVal, currentMaxVal); // generate a new random array

        generateDivsFromArr(arr); // make divs from the random array
    }

    // available sorting functions
    const availableAlgorithms = {
        "bubble-sort": bubbleSort,
        "insertion-sort": insertionSort,
        "selection-sort": selectionSort
    };

    /** the current sort function */
    const sortFunction = availableAlgorithms[usersChoiceOfAlgorithm + ""];

    animationSpeed = parseInt(animationSpeedInput.value); // assign the value of animation speed

    resetLogSection(); // reset the Log Section

    const pTag = document.createElement("p"); // create a new <p> tag
    pTag.innerHTML = "Start " + algorithmTitles[usersChoiceOfAlgorithm + ""]; // <p>Logs</p>
    pTag.setAttribute("class", "blue-background"); // add a class that will set the <p> tag's background-color property to blue
    logSection.appendChild(pTag); // add the <p>Logs</p> to the Log Section

    // call the sort function that will return an array of animation functions with their respective args
    animationsArr = sortFunction(arr);

    animateCurrentSortingAlgorithm(); // function to visualize the sorting algorithm
});

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
}

/**
 * Create a delay using promise
 * @param {Number} time The delay time in milliseconds
 * @returns {Promise} A promise that will resolve after the given time in milliseconds
 */
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time)); // the promise is resolved after the given time
}

/**
 * Visualize the sorting algorithm
 */
async function animateCurrentSortingAlgorithm() {
    /** The delay time in milliseconds */
    const delayTime = 200 - animationSpeed + 10;

    /** access each animation function in the animationsArr and call them with their respective args */
    for (const functionArr of animationsArr) {
        /** The animation function to call */
        let animationFunction = functionArr[0];
        /** array of arguments to pass to the animatin function */
        let args = functionArr[1];

        await delay(delayTime); // create a delay to show the animation step-by-step
        animationFunction(...args); // call the function with its respective parameters
    }

    const pTag = document.createElement("p"); // create a new <p> tag
    pTag.innerHTML = "The list is sorted using " + algorithmTitles[usersChoiceOfAlgorithm + ""]; // <p>Logs</p>
    pTag.setAttribute("class", "blue-background"); // add a class that will set the <p> tag's background-color property to blue
    logSection.appendChild(pTag); // add the <p>Logs</p> to the Log Section

    // scroll to the bottom of the Log Section to see the new log
    scrollToBottom(logSection);

    await delay(200);

    // enable all the input fields and the buttons
    enableInputs();
    enableButtons();
}
"use strict"

/** select tag with the sorting algorithm options */
const currentAlgorithm = document.getElementById("current-algorithm");
const sizeInput = document.getElementById("size-of-the-array"); // size of the aarray input field
const minValInput = document.getElementById("min-value-of-the-array"); // minimum value of the array input field
const maxValInput = document.getElementById("max-value-of-the-array"); // maximum value of the array input field
const animationSpeedInput = document.getElementById("animation-speed"); // animation speed range input
const randomArrButton = document.getElementById("generate-random-array"); // generate a new random array button
const startButton = document.getElementById("start-visualization"); // start visualization button

/**
 * Enable all the buttons on the page
 */
function enableButtons() {
    randomArrButton.removeAttribute("disabled"); // enable the Generate Random List Button

    startButton.removeAttribute("disabled"); // enable the Start Visualization Button
}

/**
 * Disable all the buttons on the page
 */
function disableButtons() {
    randomArrButton.setAttribute("disabled", "disabled"); // disable the Generate Random List Button to prevent multiple clicks

    startButton.setAttribute("disabled", "disabled"); // disable the Start Visualization Button to prevent multiple clicks
}

/**
 * Enable all the input fields on the page
 */
function enableInputs() {
    currentAlgorithm.removeAttribute("disabled"); // enable the select tag with the sorting algorithm options

    sizeInput.removeAttribute("disabled"); // enable the size of the list input field

    minValInput.removeAttribute("disabled"); // enable the minimum value of the list input field

    maxValInput.removeAttribute("disabled"); // enable the maximum value of the list input field

    animationSpeedInput.removeAttribute("disabled"); // enable the animation speed range input
}

/**
 * Disable all the input fields on the page
 */
function disableInputs() {
    currentAlgorithm.setAttribute("disabled", "disabled"); // disable the select tag with the sorting algorithm options

    sizeInput.setAttribute("disabled", "disabled"); // disable the size of the list input field

    minValInput.setAttribute("disabled", "disabled"); // disable the minimum value of the list input field

    maxValInput.setAttribute("disabled", "disabled"); // disable the maximum value of the list input field

    animationSpeedInput.setAttribute("disabled", "disabled"); // disable the animation speed range input
}

export { enableButtons, disableButtons, enableInputs, disableInputs };
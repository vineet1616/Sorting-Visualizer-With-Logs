"use strict"

/**
 * Scroll to the bottom of the given node
 * @param {HTMLElement} node 
 */
export default function scrollToBottom(node) {
    node.scrollTop = node.scrollHeight;
}
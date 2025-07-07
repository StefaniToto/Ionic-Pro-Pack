import _ from 'underscore';

/**
 * Return direct children elements.
 *
 * @see http://stackoverflow.com/a/27102446/368691
 * param {HTMLElement} element
 * returns {Array}
 */
const elementChildren = (element) => _.filter(element.childNodes, (elem) => elem.nodeType === 1);

/**
 * @see http://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript/4819886#4819886
 * returns {boolean}
 */
const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints;

export {
  elementChildren,
  isTouchDevice
};

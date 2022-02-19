/**
 * Array Has Duplicates
 *
 * @param {array} obj
 * @returns {boolean}
 */
export const arrayHasDuplicates = (array) => {
  return new Set(array).size !== array.length;
};

/**
 * Object Has Key
 *
 * @param {object} obj
 * @param {string} k
 * @returns {boolean}
 */
export const objectHasKey = (obj, k) => {
  return Object.prototype.hasOwnProperty.call(obj, k) && k !== '';
};

/**
 * Get Intervention Key
 *
 * @param {string} k
 * @returns {string}
 */
export const getInterventionKey = (k = '') => {
  // replace component identifiers
  const replace = [
    ':hierachical',
    ':text',
    ':number',
    ':group',
    ':exemption',
    ':icon',
    '/:route',
  ];
  replace.forEach((item) => {
    k = k.replaceAll(item, '');
  });

  // replace `/` with `.` to match Intervention
  k = k.replaceAll('/', '.');

  // remove <TextItem />, <NumberItem /> params between `[x]`
  k = k.replace(/\[(.*?)\]/, '');

  return k;
};

/**
 * Get Value
 *
 * @param {object} data
 * @param {string} key
 * @returns {any}
 */
export const getValue = (data, key) => {
  return Object.keys(data).includes(key) ? data[key] : [false, false];
};

/**
 * Get Key Params
 *
 * @param {string} key
 * @returns {string}
 */
export const getKeyParams = (k) => {
  // find `[x]`
  const match = k.match(/\[(.*?)\]/);
  // remove `[` and `]`
  return Array.isArray(match) ? match[0].slice(1, -1) : '';
};

/**
 * Safe Selected Index
 *
 * @param {array} data
 * @param {number} selectedIndex
 * @returns {number}
 */
/*
export const safeSelectedIndex = (selectedIndex, data) => {
  const dataLength = data.length !== 0 ? data.length - 1 : data.length;
  return selectedIndex > dataLength ? dataLength : selectedIndex;
};
*/

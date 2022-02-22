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
    ':select',
    ':orderby',
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
 * Get Custom Select Option Name
 *
 * @param {string} value
 * @returns {string}
 */
export const getCustomSelectOptionName = (value) => {
  return value
    .replaceAll('-', ' ')
    .split('.')
    .map((str) => {
      return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(' ');
    })
    .join('/');
};

/**
 * Get Custom Select Options Array
 *
 * @param {array} array
 * @returns {array}
 */
export const getCustomSelectOptionsArray = (array) => {
  const config = array.map((value) => {
    const name = getCustomSelectOptionName(value);
    return { key: value, name, value };
  });

  return [{ key: '', name: '', value: '' }, ...config];
};

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
    '/:route',
  ];
  replace.forEach((item) => {
    k = k.replaceAll(item, '');
  });

  // replace `/` with `.` to match Intervention
  k = k.replaceAll('/', '.');
  return k;
};

/**
 * Get Value
 *
 * @param {object} components
 * @param {string} key
 * @returns {any}
 */
export const getValue = (components, key) => {
  return Object.keys(components).includes(key)
    ? components[key]
    : [false, false];
};

/**
 * Get Roles as Nicename
 *
 * @param {array} roles
 * @returns {string}
 */
export const getRolesAsNiceName = (roles) => {
  const joined = roles.join(', ');
  // const caps = joined.charAt(0).toUpperCase() + joined.slice(1);
  const andPos = joined.lastIndexOf(',');
  return andPos > 0
    ? joined.substring(0, andPos) + ' and ' + joined.substring(andPos + 1)
    : joined;
};

/**
 * Sort Data By Role Keys
 *
 * @param {object} applied
 * @param {number} i
 * @returns {object}
 */
export const sortDataByRoleKeys = (data, i) => {
  const roleKeys = Object.keys(intervention.route.admin.data.roles);
  // const findIndex = data[i].roles.join();

  // sorting algorithm
  data.sort((a, b) => {
    const [rolesA] = a.roles;
    const [rolesB] = b.roles;
    const indexA = roleKeys.indexOf(rolesA[0]);
    const indexB = roleKeys.indexOf(rolesB[0]);

    if (indexA > indexB) {
      return 1;
    }
    if (indexA < indexB) {
      return -1;
    }
    return 0;
  });

  // new index found
  // relook this implementation
  /*
  const indexFound = data.reduce((carry, item, index) => {
    const [roles] = item.roles;
    if (findIndex === roles.join()) {
      carry = index;
    }
    return carry;
  }, i);

  const index = indexFound ? indexFound : 0;
  */

  // return { data, index };
  return { data };
};

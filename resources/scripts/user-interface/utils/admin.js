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
 * Sort Applied By Registered Roles Key
 *
 * @param {object} applied
 * @param {number} i
 * @returns {object}
 */
export const sortDataByRoleKeys = (data, i) => {
  const roleKeys = Object.keys(intervention.route.admin.data.roles);
  const findIndex = data[i].roles.group.join();

  data.sort((a, b) => {
    const indexA = roleKeys.indexOf(a.roles.group[0]);
    const indexB = roleKeys.indexOf(b.roles.group[0]);
    if (indexA > indexB) {
      return 1;
    }
    if (indexA < indexB) {
      return -1;
    }
    return 0;
  });

  const indexFound = data.reduce((carry, item, index) => {
    if (findIndex === item.roles.group.join()) {
      carry = index;
    }
    return carry;
  }, i);

  const index = indexFound ? indexFound : 0;

  return { data, index };
};

/**
 * Get Intervention Key
 *
 * @param {string} k
 * @returns {string}
 */
export const getInterventionKey = (k = '') => {
  /**
   * Replace component identifiers
   */
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

  /**
   * Replace `/` with `.` to match Intervention
   */
  k = k.replaceAll('/', '.');
  return k;
};

export const objHasKey = (obj, k) => {
  return Object.prototype.hasOwnProperty.call(obj, k) && k !== '';
};

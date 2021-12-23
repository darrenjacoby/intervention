/**
 * Get Roles as Nicename
 *
 * @param {array} roles
 * @returns {string}
 */
export const getRolesAsNiceName = (roles) => {
  const joined = roles.join(', ');
  const caps = joined.charAt(0).toUpperCase() + joined.slice(1);
  const andPos = caps.lastIndexOf(',');
  return andPos > 0
    ? caps.substring(0, andPos) + ' and ' + caps.substring(andPos + 1)
    : caps;
};

/**
 * Sort Applied By Registered Roles Key
 *
 * @param {object} applied
 * @param {number} i
 * @returns {object}
 */
export const sortAppliedByRoleKeys = (applied, i) => {
  const roleKeys = Object.keys(intervention.route.admin.data.roles);
  const findIndex = applied[i].roles.join();

  applied.sort((a, b) => {
    const indexA = roleKeys.indexOf(a.roles[0]);
    const indexB = roleKeys.indexOf(b.roles[0]);
    if (indexA > indexB) {
      return 1;
    }
    if (indexA < indexB) {
      return -1;
    }
    return 0;
  });

  const indexFound = applied.reduce((carry, item, index) => {
    if (findIndex === item.roles.join()) {
      carry = index;
    }
    return carry;
  }, i);

  const index = indexFound ? indexFound : 0;

  return { applied, index };
};

/**
 * Get Intervention Key
 *
 * @param {string} k
 * @returns {string}
 */
export const getInterventionKey = (k = '') => {
  k = k.replaceAll('/', '.');
  k = k.replaceAll(':hierachical', '');
  k = k.replaceAll(':group', '');
  k = k.replaceAll(':hierachical', '');
  return k;
};

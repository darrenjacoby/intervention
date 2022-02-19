/**
 * Admin Selected Index Session
 *
 * @description write/read session storage for `intervention-admin-selected-index`.
 *
 * @param {string} write
 * @returns {null|string}
 */
const adminSelectedIndexSession = (write = false) => {
  if (write !== false) {
    sessionStorage.setItem('intervention-admin-selected-index', write);
    return;
  }

  return Number(sessionStorage.getItem('intervention-admin-selected-index'));
};

/**
 * Admin Path Session
 *
 * @description write/read session storage for `intervention-admin-path`.
 *
 * @param {string} write
 * @returns {null|string}
 */
const adminPathSession = (write = false) => {
  if (write !== false) {
    sessionStorage.setItem('intervention-admin-path', JSON.stringify(write));
    return;
  }

  return JSON.parse(sessionStorage.getItem('intervention-admin-path'));
};

/**
 * Show Show Session
 *
 * @description write/read session storage for `intervention-admin-path`.
 *
 * @param {string} write
 * @returns {null|string}
 */
const adminShowSession = (write = false) => {
  if (write !== false) {
    sessionStorage.setItem('intervention-admin-show', write);
    return;
  }

  return sessionStorage.getItem('intervention-admin-show');
};

export { adminSelectedIndexSession, adminPathSession, adminShowSession };

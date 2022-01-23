/**
 * Admin Selected Index Session
 *
 * @description write/read session storage for `intervention-admin-selected-index`.
 *
 * @param {string} write
 * @returns {null|string}
 */
export const adminSelectedIndexSession = (write = false) => {
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
export const adminPathSession = (write = false) => {
  if (write !== false) {
    sessionStorage.setItem('intervention-admin-path', JSON.stringify(write));
    return;
  }

  return JSON.parse(sessionStorage.getItem('intervention-admin-path'));
};

/**
 * Application Radio Session
 *
 * @description write/read session storage for `intervention-application-radio`.
 *
 * @param {string} write
 * @returns {null|string}
 */
export const applicationRadioSession = (write = false) => {
  if (write !== false) {
    sessionStorage.setItem('intervention-application-radio', write);
    return;
  }

  return sessionStorage.getItem('intervention-application-radio');
};

/**
 * Export Selection Session
 *
 * @description write/read session storage for `intervention-export-selection`.
 *
 * @param {array} write
 * @returns {null|array}
 */
export const exportSelectionSession = (write = false) => {
  if (write !== false) {
    sessionStorage.setItem(
      'intervention-export-selection',
      JSON.stringify(write)
    );
    return;
  }

  return JSON.parse(sessionStorage.getItem('intervention-export-selection'));
};

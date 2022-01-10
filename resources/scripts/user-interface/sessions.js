/**
 * Application Radio Session
 *
 * @description write/read session storage for `intervention-application-radio`.
 *
 * @param {string} write
 * @returns {null|string}
 */
export const applicationRadioSession = (write = false) => {
  if (write) {
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
  if (write) {
    sessionStorage.setItem(
      'intervention-export-selection',
      JSON.stringify(write)
    );
    return;
  }

  return JSON.parse(sessionStorage.getItem('intervention-export-selection'));
};

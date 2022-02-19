/**
 * Export Selection Session
 *
 * @description write/read session storage for `intervention-export-selection`.
 *
 * @param {array} write
 * @returns {null|array}
 */
const exportSelectionSession = (write = false) => {
  if (write !== false) {
    sessionStorage.setItem(
      'intervention-export-selection',
      JSON.stringify(write)
    );
    return;
  }

  return JSON.parse(sessionStorage.getItem('intervention-export-selection'));
};

export { exportSelectionSession };

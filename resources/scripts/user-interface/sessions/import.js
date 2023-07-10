/**
 * Import Session Storage
 *
 * @description write/read session storage for `intervention-import-radio`.
 *
 * @param {string} write
 * @returns {null|string}
 */
const importSessionStorage = (write = false) => {
  if (write !== false) {
    sessionStorage.setItem('intervention-import-show', write);
    return;
  }

  return sessionStorage.getItem('intervention-import-show');
};

export { importSessionStorage };

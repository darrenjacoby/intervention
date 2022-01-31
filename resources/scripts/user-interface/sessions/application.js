/**
 * Application Radio Session
 *
 * @description write/read session storage for `intervention-application-radio`.
 *
 * @param {string} write
 * @returns {null|string}
 */
const applicationShowSession = (write = false) => {
  if (write !== false) {
    sessionStorage.setItem('intervention-application-show', write);
    return;
  }

  return sessionStorage.getItem('intervention-application-show');
};

export { applicationShowSession };

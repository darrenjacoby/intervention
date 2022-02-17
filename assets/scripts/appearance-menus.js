/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************************!*\
  !*** ./resources/scripts/admin/appearance-menus.js ***!
  \*****************************************************/
var $ = window.jQuery;
wp.domReady(function () {
  var initialMaxDepth = wpNavMenu.options.globalMaxDepth;
  /**
   * Set the depth for each menu
   */

  function setMaxDepth() {
    $.each(interventionAppearanceMenus, function (location, maxDepth) {
      var checked = $('#locations-' + location).prop('checked');

      if (location === 'all' || checked) {
        wpNavMenu.options.globalMaxDepth = maxDepth;
      }
    });
  }

  setMaxDepth();
  /**
   * Depth to update when location checkbox is changed
   */

  $('.menu-theme-locations input').on('change', function () {
    wpNavMenu.options.globalMaxDepth = initialMaxDepth;
    setMaxDepth();
  });
});
/******/ })()
;
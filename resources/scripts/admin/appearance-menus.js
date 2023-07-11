const $ = window.jQuery;

wp.domReady(() => {
  const initialMaxDepth = wpNavMenu.options.globalMaxDepth;

  /**
   * Set the depth for each menu
   */
  function setMaxDepth() {
    $.each(interventionAppearanceMenus, function (location, maxDepth) {
      const checked = $('#locations-' + location).prop('checked');

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

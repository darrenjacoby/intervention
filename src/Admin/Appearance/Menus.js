wp.domReady(() => {
    $ = window.jQuery;
    var initialMaxDepth = wpNavMenu.options.globalMaxDepth;

    /**
     * Set the depth for each menu
     */
    function setMaxDepth() {
        $.each(menus, function (location, maxDepth) {
            var checked = $('#locations-' + location).prop('checked');
            // var maxdepth = depth < wpNavMenu.options.globalMaxDepth;

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

const mix = require('laravel-mix');

mix.setPublicPath('./dist/assets');

mix.js('./resources/scripts/block-editor.js', 'scripts');
mix.js('./resources/scripts/appearance-menus.js', 'scripts');

const mix = require('laravel-mix');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

require('laravel-mix-tailwind');

mix.setPublicPath('./dist/assets');
mix.setResourceRoot('../');

mix.webpackConfig({
  plugins: [
    /**
     * WordPress dependencies to be removed.
     *
     * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-dependency-extraction-webpack-plugin/
     */
    new DependencyExtractionWebpackPlugin(),

    /**
     * Eslint
     *
     * @link https://github.com/webpack-contrib/eslint-webpack-plugin
     */
    new ESLintPlugin({
      context: './resources/scripts',
    }),

    /**
     * Stylelint
     *
     * @link https://github.com/webpack-contrib/stylelint-webpack-plugin
     */
    new StylelintPlugin({
      context: './resources/styles',
      files: '**/*.css',
      fix: true,
    }),
  ],
});

mix
  .postCss('./resources/styles/user-interface.css', 'styles')
  .options({
    postCss: [
      require('postcss-import'),
      require('postcss-preset-env')({ stage: 1 }),
    ],
  })
  .tailwind();

mix.js('./resources/scripts/admin/block-editor.js', 'scripts');
mix.js('./resources/scripts/admin/appearance-menus.js', 'scripts');
mix.js('./resources/scripts/user-interface.js', 'scripts');

mix.copyDirectory('resources/fonts', './dist/assets/fonts');

mix.version();

module.exports = {
  mode: 'jit',
  purge: ['./resources/scripts/user-interface/**/*.js'],
  /**
   * WordPress wp-admin tailwind theme.
   */
  theme: {
    /**
     * Breakpoints
     *
     * Derived from `@wordpress/viewport`.
     *
     * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-viewport/
     */
    screens: {
      xs: '480px',
      sm: '600px',
      md: '782px',
      lg: '960px',
      xl: '1280px',
      '2xl': '1440px',
    },
    /**
     * Fonts
     *
     * Derived from WordPress wp-admin font families, no serif font exists.
     */
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen-Sans',
        'Ubuntu',
        'Cantarell',
        'Helvetica Neue',
        'sans-serif',
      ],
      mono: ['JetBrainsMonoMedium', 'monospace'],
      'mono-bold': ['JetBrainsMonoBold', 'monospace'],
    },
    fontSize: {
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      20: '20px',
      23: '23px',
    },
    fontWeight: {
      400: 400,
      500: 500,
      600: 600,
    },
    /**
     * Colors
     *
     * Derived from WordPress 5.7 simplified colors.
     *
     * @link https://make.wordpress.org/core/2021/02/23/standardization-of-wp-admin-colors-in-wordpress-5-7/
     * @link https://codepen.io/ryelle/full/WNGVEjw
     */
    colors: {
      primary: 'var(--wp-admin-theme-color)',
      'primary-10': 'var(--wp-admin-theme-color-darker-10)',
      'primary-20': 'var(--wp-admin-theme-color-darker-20)',
      'gray-0': '#f6f7f7',
      'gray-2': '#f0f0f1',
      'gray-5': '#dcdcde',
      'gray-10': '#c3c4c7',
      'gray-20': '#a7aaad',
      'gray-30': '#8c8f94',
      'gray-40': '#787c82',
      'gray-50': '#646970',
      'gray-60': '#50575e',
      'gray-70': '#3c434a',
      'gray-100': '#1d2327',
      'yellow-0': '#fcf9e8',
      'green-0': '#edfaef',
      'green-5': '#b8e6bf',
      'red-10': '#ffabaf',
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
    },
    /**
     * Spacing
     */
    spacing: {
      0: '0',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      20: '20px',
      24: '24px',
      48: '48px',
      60: '60px',
    },
    /**
     * Border
     */
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },
    borderRadius: {
      DEFAULT: '2px',
      4: '4px',
    },
  },
};

# Contributing

## Onboarding

```shell
$ git clone git@github.com:soberwp/intervention.git
$ composer install
```

## Guidelines

### PSR-12

Run [Easy Coding Standards](https://github.com/symplify/easy-coding-standard) to ensure new code complies with PSR-12 guidelines.

```shell
$ composer lint
```

Most errors can easily be fixed with:

```shell
$ composer lint:fix
```

### Composer/Phing

Changes to `composer.json` require a build step to create a `dist` folder for WordPress users who do not use Composer to manage their depedencies.

Run [Phing](https://www.phing.info/) to build the `dist` folder.

```shell
$ composer build
```

### NPM

Changes to folder `resources/` require a build step to create a `assets` folder for styles and scripts. If you have run `composer build` prior you can skip this step.

Run [NPM](https://www.npmjs.com/) to build the `assets/styles` and `assets/scripts` folder.

```shell
$ composer build:assets
```

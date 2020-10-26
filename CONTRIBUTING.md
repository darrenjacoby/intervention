# Contributing

## Onboarding

```shell
$ git clone git@github.com:soberwp/intervention.git
$ composer install
```

## Guidelines

### PHPCS/PSR-2

Run [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer) to ensure new code complies with PSR-2 guidelines.

```shell
$ composer test
```

### Composer/Phing

Changes to `composer.json` require a build step to create a `dist` folder for WordPress users who do not use Composer to manage their depedencies. 

Run [Phing](https://www.phing.info/) to build the `dist` folder.

```shell
$ composer build
```

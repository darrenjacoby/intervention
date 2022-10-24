## `application.media`

Set application media options.

### Options;

```php
<?php

return [
    'application.media' => [
        'sizes.$name' => (boolean|int|array) false|$width|[
            'width'|'w' => (int) $width,
            'height'|'h' => (int) $height,
            'crop' => (boolean) $enable_crop,
        ],
        'mimes.$name' => (boolean|string) $enable_mime_type,
        'uploads.organize' => (boolean) $enable_upload_organization,
    ],
];
```

### Examples;

```php
<?php

return [
    'application.media' => [
        'sizes.thumbnail' => [
            'width' => 200,
            'height' => 200,
            'crop' => true,
        ],
        'sizes.medium' => 400,
        'sizes.large' => 1200,
        'mimes.png' => false,
        'mimes.svg' => true,
        'uploads.organize' => true,
    ],
];
```

#### Image Sizes

Intervention can register custom image sizes.

```php
<?php

return [
    'application.media' => [
        'sizes.100vw' => 1800,
        'sizes.3/12' => 400,
        'sizes.4/12' => 600,
        'sizes.6/12' => 800,
        'sizes.9/12' => 1200,
        'sizes.12/12' => 1600,
        'sizes.sq.w' => 600,
        'sizes.sq.h' => 600,
        'sizes.sq.crop' => true,
    ],
];
```

To remove an image size pass in `false`.

```php
<?php

return [
    'application.media.sizes.medium' => false,
];
```

#### Mime Types

To enable custom mimes, a string of the mime type will need to be passed. 
* Intervention has built in support for `svg` and `svgz`, so you can simply pass in `true`.

**Enabling custom mimes;**

```php
<?php

return [
    'application.media' => [
        'mimes.svg' => true,
        'mimes.bmp' => 'image/bmp',
        'mimes.webm' => 'video/webm',
    ],
];
```

### Further Reading;

* `mimes.$name`
    * [https://wpengine.com/support/mime-types-wordpress/](https://wpengine.com/support/mime-types-wordpress/)
* `sizes.$name`
    * [https://developer.wordpress.org/reference/functions/add_image_size/](https://developer.wordpress.org/reference/functions/add_image_size/)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[application.media]&labels=bug&assignees=darrenjacoby)**
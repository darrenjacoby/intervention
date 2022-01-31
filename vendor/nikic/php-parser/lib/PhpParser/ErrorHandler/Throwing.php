<?php

declare (strict_types=1);
namespace Jacoby\Intervention\PhpParser\ErrorHandler;

use Jacoby\Intervention\PhpParser\Error;
use Jacoby\Intervention\PhpParser\ErrorHandler;
/**
 * Error handler that handles all errors by throwing them.
 *
 * This is the default strategy used by all components.
 */
class Throwing implements ErrorHandler
{
    public function handleError(Error $error)
    {
        throw $error;
    }
}

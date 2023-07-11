<?php

namespace Jacoby\Intervention\Illuminate\Contracts\Container;

use Exception;
use Jacoby\Intervention\Psr\Container\ContainerExceptionInterface;
class CircularDependencyException extends Exception implements ContainerExceptionInterface
{
    //
}

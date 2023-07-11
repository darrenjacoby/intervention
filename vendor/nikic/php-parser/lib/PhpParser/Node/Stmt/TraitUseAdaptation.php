<?php

declare (strict_types=1);
namespace Jacoby\Intervention\PhpParser\Node\Stmt;

use Jacoby\Intervention\PhpParser\Node;
abstract class TraitUseAdaptation extends Node\Stmt
{
    /** @var Node\Name|null Trait name */
    public $trait;
    /** @var Node\Identifier Method name */
    public $method;
}

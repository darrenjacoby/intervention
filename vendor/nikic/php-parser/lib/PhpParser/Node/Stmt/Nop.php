<?php

declare (strict_types=1);
namespace Jacoby\Intervention\PhpParser\Node\Stmt;

use Jacoby\Intervention\PhpParser\Node;
/** Nop/empty statement (;). */
class Nop extends Node\Stmt
{
    public function getSubNodeNames() : array
    {
        return [];
    }
    public function getType() : string
    {
        return 'Stmt_Nop';
    }
}

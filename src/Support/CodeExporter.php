<?php

namespace Sober\Intervention\Support;

use Sober\Intervention\Brick\VarExporter\VarExporter;

class CodeExporter
{
    public static function export($render)
    {
        return VarExporter::export($render, VarExporter::ADD_RETURN | VarExporter::TRAILING_COMMA_IN_ARRAY);
    }
}

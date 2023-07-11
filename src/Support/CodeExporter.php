<?php

namespace Jacoby\Intervention\Support;

use Jacoby\Intervention\Brick\VarExporter\VarExporter;

class CodeExporter
{
	public static function export($render)
	{
		return VarExporter::export($render, VarExporter::ADD_RETURN | VarExporter::TRAILING_COMMA_IN_ARRAY);
	}
}

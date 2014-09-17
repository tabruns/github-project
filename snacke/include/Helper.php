<?php

class Helper
{
	public static function quotes($string)
	{
		$sign = array("'", '"');
		$replace = array("&#039;", "&quot;");
		
		return str_replace($sign, $replace, $string);
	}	
}

<?php
session_start();

define('HOME', "github-project");
define("ROOT", dirname(dirname(__FILE__)));

function configAutoload($className)
{
    $filename = dirname(__FILE__)."/".$className . ".php";
	
    if(is_readable($filename))
    {
        require $filename;
    }
}

spl_autoload_register('configAutoload', true, true);




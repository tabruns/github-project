<?php

include 'include/config.php';

class Snacke extends Page
{
	public $title = "Snacke";
	public $script = "js/snacke.js"	;
	
	public function __construct()
	{
		parent::__construct();
	}
	
	public function body()
	{
		echo "Hier";
	}
}

$snacke = new Snacke();

<?php

<<<<<<< HEAD
include 'snacke/include/config.php';

class Index extends Page
{
	public $title = "Index";
	public $style = "snacke/css/style.css";
	
	public function __construct()
	{
		parent::__construct();
	}
	
	public function body()
	{
		echo "<h1>Übersicht</h1>";
		
		echo "<a class='button' href='snacke/snacke.php' >Snacke</a>";
	}
}

$index = new Index();

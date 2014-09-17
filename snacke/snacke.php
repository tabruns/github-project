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
		echo "<h1 style='margin-left:610px'>Spielen Sie ein Spiel</h1>";
		echo "<div class='wrapper'>";
		
		
		echo "<table id='canvas'>";
		
		$anzahlSpalten = 45;
		$anzahlZeilen = 25;
		
		for($i=0; $i < $anzahlZeilen; $i++)
		{
			echo "<tr>";
			for($j=0; $j<$anzahlSpalten; $j++)
			{
				echo "<td>";
				echo "</td>";
			}	
			
			echo "</tr>";
		}

		echo "</table>";
		
		
		echo "</div>";
	}
}

$snacke = new Snacke();

<?php

class Page
{
	public $title = "Snacke";
	public $style = "../css/style.css";
	
	public function __construct()
	{
		$this->request = array_merge($_GET, $_POST);
	}
	
	public function header()
	{
		echo "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'>";
		echo "<html xmlns='http://www.w3.org/1999/xhtml'>";
		echo "<head>";
		echo "<link rel='stylesheet' href='//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css'	type='text/css' />";
		echo "<title>".$this->title."</title>";

		echo '<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>';		
		echo "<script src='http://code.jquery.com/jquery-1.10.2.js'></script>";
		echo "<script src='http://code.jquery.com/ui/1.11.1/jquery-ui.js'></script>";
				
		// if(!empty($this->script))
		// {
			// echo "<script type='text/javascript' src='".$this->script."'></script>";
		// }
		echo "<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />";
		echo "<link rel='stylesheet' type='text/css' href='".$this->style."' />";
		echo "<link href='//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css' rel='stylesheet' type='text/css' />";
		echo "</head>";
		echo "<body>";
		echo "<div class='pageWrapper' id='pagewrapper' >";
	}

	public function body()
	{
		echo "Hier";
	}
	
	public function footer()
	{
		echo "</div><!-- .main -->";
		echo "</div><!-- #pagewrapper -->";
		echo "</body>";
		echo "</html>";		
	}
	
	public function __desctruct()
	{
		$this->header();
		$this->body();
		$this->footer();
	}
}

/**
 * @author tbruns
 */

$(document).ready(function(){
	$("#canvas tr:first-child td, #canvas tr:last-child td").addClass("wand");
	$("#canvas tr td:first-child, #canvas tr td:last-child").addClass("wand");
	 
	 
	snacke = [[17, 16], [18, 16]];

	richtung = "o";   
	futterWert = 0;  

	$("body").keydown(function(event){
		event.preventDefault();
		if(event.which == 39)
		{
			richtung = "r";
		}
		else if(event.which == 37)
		{
			richtung = "l";
		}
		else if(event.which == 40)
		{
			richtung = "u";
		}
		else if(event.which == 38)
		{
			richtung = "o";
		}
	});
	
	interval = setInterval(schleife, 150);  
});



function schleife()
{
	if(snacke.length > 10)
	{
		clearInterval(interval);
		level();
	}

	fuettern();
	
	$("#canvas tr:nth-child("+(snacke[0][0])+") td:nth-child("+snacke[0][1]+")").addClass("snacke");
	
	kopf = [];
	
	if(richtung == "r")
	{
		kopf.push(snacke[0][0]);
		kopf.push(snacke[0][1]+1);
		snacke.unshift(kopf);
		snacke.pop();
	}
	else if(richtung == "l")
	{
		kopf.push(snacke[0][0]);
		kopf.push(snacke[0][1]-1);
		snacke.unshift(kopf);
		snacke.pop();
	}
	else if(richtung == "u")
	{
		kopf.push(snacke[0][0]+1);
		kopf.push(snacke[0][1]);
		snacke.unshift(kopf);
		snacke.pop();
	}
	else if(richtung == "o")
	{
		kopf.push(snacke[0][0]-1);
		kopf.push(snacke[0][1]);
		snacke.unshift(kopf);
		snacke.pop();
	}
	
	verloren();
	draw();
	wachsen();
}

function fuettern()
{	

	
	size = $("#canvas .futter").size();

	if(size == 0)
	{
		zufall1 = ((Math.random()*23) + 2);
		zeilenFutter = Math.floor(zufall1);
		   
		zufall2 = ((Math.random()*43) + 2);
		spaltenFutter = Math.floor(zufall2);
		   
		zufall3 = ((Math.random()*9) + 1);
		futterWert = Math.floor(zufall3);
		
		console.log($("#canvas .futter").size());	
		
		if($("#canvas tr:nth-child("+zeilenFutter+") td:nth-child("+spaltenFutter+")").hasClass("snacke"))
		{
			fuettern();
		}
		else
		{
			$("#canvas tr:nth-child("+zeilenFutter+") td:nth-child("+spaltenFutter+")").addClass("futter").text(futterWert);	
		}
		
	}
}

function verloren()
{
	if($("#canvas tr:nth-child("+(snacke[0][0])+") td:nth-child("+snacke[0][1]+")").hasClass("snacke"))
		{
			clearInterval(interval);
			alert("Sie haben verloren");
		}
		
	if($("#canvas tr:nth-child("+snacke[0][0]+") td:nth-child("+snacke[0][1]+")").hasClass("wand"))
	{
		clearInterval(interval);
		alert("Sie haben verloren");
	}
}

function draw() 
{
  	$('#canvas').find("td.snacke").removeClass("snacke");
	
	for(var i=0; i < snacke.length; i++) 
	{
		$("#canvas tr:nth-child("+snacke[i][0]+") td:nth-child("+snacke[i][1]+")").addClass("snacke");
	};
}

function wachsen()
{
	if($("#canvas tr:nth-child("+snacke[0][0]+") td:nth-child("+snacke[0][1]+")").hasClass("futter"))
	{
		anzahl = ($("#canvas tr:nth-child("+snacke[0][0]+") td:nth-child("+snacke[0][1]+")").text());
				
		for (var i=0; i < anzahl; i++) 
		{
	 		 snacke.push(snacke[snacke.length - 1]);
		};
	$("#canvas tr:nth-child("+snacke[0][0]+") td:nth-child("+snacke[0][1]+")").removeClass("futter").text("");
	}	
}

function level()
{
	$(".level").innerHTML="Test";
	
	interval = setInterval(schleife, 125);
	if(snacke.length > 25)
	{
		clearInterval(interval);
		interval = setInterval(schleife, 80);
		
		if (snacke.length > 75) 
		{
			clearInterval(interval);
			interval = setInterval(schleife, 63);
			
			if(snacke.length > 125)
			{
				clearInterval(interval);
				interval = setInterval(schleife, 31);
				
				if (snacke.length > 250) 
				{
					clearInterval(interval);
					interval = setInterval(schleife, 15);
				}
			}
		}
	}
}


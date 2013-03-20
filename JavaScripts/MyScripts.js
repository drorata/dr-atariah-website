
<!-- hide the script from old browsers --
	function PageLastUpdated(){
		document.writeln('Last Updated: '+document.lastModified);   
	}

//--end hiding here -->


function NavBar(str){
	document.writeln('<UL style=border-bottom:none>');
		if (str == "http://page.mi.fu-berlin.de/atariah/" || str == "http://page.mi.fu-berlin.de/atariah/index.html")
			document.writeln('<LI><font size=2 color=#27914F><strong>Home</strong></font><BR>');
		else
			document.writeln('<LI><A HREF=index.html>Home</A><BR>');
		
		if (str == "http://page.mi.fu-berlin.de/atariah/research.html")
			document.writeln('<LI><font size=2 color=#27914F><strong>Research</strong></font><BR>');
		else
			document.writeln('<LI><A HREF=research.html>Research</A><BR>');
		
		if (str == "http://page.mi.fu-berlin.de/atariah/talks.html")
			document.writeln('<LI><font size=2 color=#27914F><strong>Talks</strong></font><BR>');
		else
			document.writeln('<LI><A HREF=talks.html >Talks</A><BR>');
			
	document.writeln('<LI><A href=javascript:history.back()>Back</A>')
	document.writeln('</UL>');
	}
	
function test(){
	document.writeln('hello');
}
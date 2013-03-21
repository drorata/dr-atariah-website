var selectedItemColor="#1A52E7";

function PageLastUpdated(){
		var update = new Date(document.lastModified)
		var theMonth = update.getMonth() + 1
		var theDate = update.getDate()
		var theYear = update.getFullYear()
		var theHrs=update.getHours()
		var theMin=update.getMinutes()
		return ('Last Updated: '+theDate+'.'+theMonth+'.'+theYear);
}

function genFooter(){
	var str = PageLastUpdated();
	document.writeln("<i>"+str+"</i>");
}

function NavBar(str){
		if (str == "http://page.mi.fu-berlin.de/atariah/" || str == "http://page.mi.fu-berlin.de/atariah/index.html")
			document.writeln('<LI><A HREF=index.html class="active">Home</A><BR>');
		else
			document.writeln('<LI><A HREF=index.html>Home</A><BR>');

		if (str == "http://page.mi.fu-berlin.de/atariah/research.html")
			document.writeln('<LI><A HREF=research.html class="active">Research</A><BR>');
		else
			document.writeln('<LI><A HREF=research.html>Research</A><BR>');

		if (str == "http://page.mi.fu-berlin.de/atariah/talks.html")
			document.writeln('<LI><A HREF=talks.html class="active">Talks</A><BR>');
		else
			document.writeln('<LI><A HREF=talks.html >Talks</A><BR>');

		if (str == "http://page.mi.fu-berlin.de/atariah/gallery.html")
			document.writeln('<LI><A HREF=gallery.html class="active">Gallery</A><BR>');
		else
			document.writeln('<LI><A HREF=gallery.html >Gallery</A><BR>');

}

function genTitle(){
var quote=genQuote();
document.write("<div id=\'title_text\'>");
document.write("			Dror Atariah");
document.write("		<\/div>");
document.write("		<div id=\'subtitle\'>");
//document.write("			&quot;I have had my results for a long time: but I do not yet know how I am to arrive at them&quot; <owner>- Carl Friedrich Gauss<\/owner> ");

document.write("			&quot;"+quote[0]+"&quot;<br> <owner>- "+quote[1]+"<\/owner> ");

document.write("		<\/div>");
document.write("		<ul id=\'nav\'>");
document.write("			<script language=\'JavaScript\'> {NavBar(document.location);} <\/script>			");
document.write("		<\/ul>");
document.write("		<div id=\'logo\'>");
document.write("<a href=\"http:\/\/www.math-berlin.de\" target=\"\_blank\"><img src=\"site_pictures\/bms-logo.gif\" width=\"65\" height=\"65\" border=\"0\" alt=\"\"><\/a>");
document.write("<a href=\"http:\/\/www.fu-berlin.de\" target=\"\_blank\"><img src=\"site_pictures\/fu-logo.jpeg\" width=\"65\" height=\"65\" border=\"0\" alt=\"\"><\/a>");
document.write("		<\/div>");
}

function genQuote(){
var Quotation=new Array() // do not change this!
var QuoteSource=new Array()

// Set up the quotations to be shown, below.
// To add more quotations, continue with the
// pattern, adding to the array.  Remember
// to increment the Quotation[x] index!

Quotation[0] = "I have had my results for a long time: but I do not yet know how I am to arrive at them";
QuoteSource[0] = "Carl Friedrich Gauss";
Quotation[1] = "Stupidity costs both time and money!";
QuoteSource[1] = "My wife";
Quotation[2] = "The laws of nature are but the mathematical thoughts of God";
QuoteSource[2] = "Euclid";
Quotation[3] = "It has been said that democracy is the worst form of government except all the others that have been tried";
QuoteSource[3] = "Sir W. Churchill";
Quotation[4] = "A man can't be too careful in the choice of his enemies.";
QuoteSource[4] = "Oscar Wilde";
Quotation[5] = "A friend is one who has the same enemies as you have."
QuoteSource[5] = "Abraham Lincoln";
var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));

var res=new Array()
res[0]=Quotation[whichQuotation];
res[1]=QuoteSource[whichQuotation];
return res;
}

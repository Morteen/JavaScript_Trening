//Listener for for form submit

document.getElementById("myForm").addEventListener("submit", saveBookmark);
//Lagre bokmerker
function saveBookmark(){
var siteName= document.getElementById("siteName").value;
var siteUrl= document.getElementById("siteURL").value;
  

if(!validate(siteName,siteUrl)){
	return false;
}


var bookMark={
	name:siteName,
	url:siteUrl

}
siteName.innerHTML("");
siteUrl.innerHTML("");




if(localStorage.getItem("bookmarks")==null){
	var bookmarks=[];
	bookmarks.push(bookMark);
	localStorage.setItem("bookmarks",JSON.stringify(bookmarks));//JSON.stringify gjør om objektet til en string
	

}else{
	//Skaff bokmerkene fra localstorage
	var bookmarks=JSON.parse(localStorage.getItem("bookmarks"));
	
	//add nytt bookmark til tabellen
	bookmarks.push(bookMark);
	//reset localstorage
	localStorage.setItem("bookmarks",JSON.stringify(bookmarks));


}
//for å oopdatere listen på nettesiden bruker vi fetsh boomark funksjonen igjen
	fetchBookmarks();
	//prevent form   fra å bli lagret
	e.preventDefault();
}

// Slett bokmerker
function deleteBookmark(url){
var bookmarks=JSON.parse((localStorage.getItem("bookmarks")));
for(var i =0;i<bookmarks.length;i++){
	
	if(bookmarks[i].url==url){
		bookmarks.splice(i,1);//tar bort gjeldene plassering i arrayen
	}
	//Reset localstorage til gjeldene array
	localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
	//for å oopdatere listen på nettesiden bruker vi fetsh boomark funksjonen igjen
	fetchBookmarks();
 }
}


//skaff bokmerker

function fetchBookmarks(){
	var bookmarks=JSON.parse((localStorage.getItem("bookmarks")));
var bookmarksResult=document.getElementById("bookmarksResult");



//bygg output
bookmarksResult.innerHTML="";
for(var i =0;i<bookmarks.length;i++){
	var name= bookmarks[i].name;
	var url=bookmarks[i].url;


	bookmarksResult.innerHTML+='<div class="well">'+
	'<h3>'+name+
	'<a class="btn btn-default" target=_"blank" href="'+url+'">Visit</a>'+
	'<a onclick="deleteBookmark(\''+url+'\') " class="btn btn-danger" href="#">Delete</a>'+
	
	'</h3>'+'</div>';
}
}
//validering
function validate(siteName, siteUrl){ 
if(!siteName||!siteUrl){
	alert("Du må fylle ut feltene");
	return false;

}

//Validering for  riktig URL
var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);


if (!siteUrl.match(regex)) {
  alert("Bruk en gyldig  URL");
  return false;
} 
return true;
}
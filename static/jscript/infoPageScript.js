var infoSelector = document.querySelector("#selectHolder select");
var moreInfoButton = document.querySelector("#selectHolder button");
var submitButton = document.getElementById("buttonOnSecondPage"); //Need to add listener

//submitButton.addEventListener("click", function(){
//	window.location.href="thirdPage.html";
//});
//var infoPanels = document.querySelectorAll(".infoDisplay");

function hidePanels(documents){
	for(var i = 0; i<documents.length; i++){
		documents[i].style.visibility = "hidden";
	}
}

function showPanels(documents){
	for(var i=0; i<documents.length; i++){
		documents[i].style.visibility = "visible";
	}
}

function makeInfoOneVis(){
	document.getElementById("panel1").style.visibility = "visible";
}

function updateInfo(selectorElement){
	var infoPanels = document.querySelectorAll(".infoDisplay");
	hidePanels(infoPanels);
	
	if(selectorElement.value === "infoOne"){
		
		console.log("info one has been selected");
		document.getElementById("panel1").style.visibility = "visible";
		
	}else if(selectorElement.value === "infoTwo"){
		
		console.log("info two has been selected");
		document.getElementById("panel2").style.visibility = "visible";
		
	}else if(selectorElement.value === "infoThree"){
		
		console.log("info three has been selected");
		document.getElementById("panel3").style.visibility = "visible";
	}else if(selectorElement.value === "infoFour"){
		
		console.log("info four has been selected");
		document.getElementById("panel4").style.visibility = "visible";
	}
}

makeInfoOneVis();
infoSelector.addEventListener("change", function() {updateInfo(this);})
moreInfoButton.addEventListener("click", function(){
		var infoPanels = document.querySelectorAll(".infoDisplay");
		showPanels(infoPanels);
	});



// JavaScript Document
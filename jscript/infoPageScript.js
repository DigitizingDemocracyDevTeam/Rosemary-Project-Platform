var infoSelector = document.querySelector("#selectHolder select");
var infoPanels = document.querySelectorAll(".infoDisplay");

/*function hidePanels(documents){
	for(var i = 0; i<documents.length; i++){
		documents[i].visibility = "hidden";
	}
}*/

function updateInfo(selectorElement){
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

//hidePanels(infoPanels);
infoSelector.addEventListener("change", function() {updateInfo(this);})


// JavaScript Document
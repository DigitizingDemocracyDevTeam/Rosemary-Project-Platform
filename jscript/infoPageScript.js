const infoSelector = document.quereSelector("#selectHolder select");

function updateInfo(selectorElement){
	if(selectorElement.value === "infoOne"){
		console.log("info one has been selected");
	}else if(selectorElement.value === "infoTwo"){
		
		console.log("info two has been selected");
		
	}else if(selectorElement.value === "infoThree"){
		
		console.log("info three has been selected");
		
	}else if(selectorElement.value === "infoFour"){
		
		console.log("info four has been selected");
		
	}
}

infoSelector.addEventListener("change", updateInfo(infoSelector));


/* Variablen setzen */

var Image = {
	"HAPPY": "00000:09090:00000:90009:09990",
	"SAD": "00000:09090:00000:09990:90009",
	"HEART": "09090:99999:99999:09990:00900",
	"HEART_SMALL": "00000:09090:09990:00900:00000"
	}

/* Funktion definieren - LED-Matrix-Bild setzen */

function setImage(object) {

	var liste = Image[object].split(":");
	
	for(var i in liste) {
		for(var j in liste[i]) {
			if(liste[i][j] == "0") {
				document.getElementById(i + j).style.fill = "rgb(200,200,200)";
			} else {
				document.getElementById(i + j).style.fill = "rgb(255,0,0)";
			}
		}
	}

}

setImage("HAPPY");


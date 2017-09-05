var schritte = [

	{ id: 1,
	  text: "id: 1",
	  handlung: "B",
	  ziele: [2,3],
	  image: "",
	  gegenstand: ""				
	},
	{ id: 2,
	  text: "id: 2",
	  handlung: "B",
	  ziele: [2,3],
	  image: "",
	  gegenstand: ""				
	},
	{ id: 3,
	  text: "id: 3",
	  handlung: "B",
	  ziele: [2,3],
	  image: "",
	  gegenstand: ""				
	}

		]

function sucheSchritt(stelle) {

	for(var i = 0; i < schritte.length; i++) {
 		if(schritte[i].id == stelle) {
		
			var text = "<p>" + schritte[i].text + "</p>";
	
			for(var j = 0; j < schritte[i].ziele.length; j++) {
				text += "<div onclick=\"sucheSchritt(";
				text += schritte[i].ziele[j];
				text += ");\">> <a href=\"#\" title=\""; 
				text += sucheText(schritte[i].ziele[j]);
				text += "\">";
				text += sucheText(schritte[i].ziele[j]);
				text += "</a></div>";
				}	

			break; 
			}
			
		}

	inhalt.innerHTML = text;
	}

function sucheText(stelle) {

	for(var i = 0; i < schritte.length; i++) {
		if(schritte[i].id == stelle) {
			return schritte[i].handlung;
		}

	}
}

sucheSchritt(1);

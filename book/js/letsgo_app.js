tools = ["Rucksack","Tools"];

function sucheSchritt(stelle) {

	if(stelle == 9 && tools.length == 4) { sucheSchritt(12); return }

	for(var i = 0; i < schritte.length; i++) {
 		if(schritte[i].id == stelle) {
		
			if(schritte[i].gegenstand) { tools.push(schritte[i].gegenstand); }

			var text = "<p style='text-align: center;'><img src=\"" + schritte[i].image + "\" /></p>";
			text += "<p>" + schritte[i].text;
			
			if(schritte[i].alt) { text += schritte[i].alttext; }

			text += "</p>";

			text += "<p>Tools: ";
			for(var j = 0; j < tools.length; j++) {
				 text += tools[j] + " ";
			}
			text += "</p>";
	
			for(var j = 0; j < schritte[i].ziele.length; j++) {
				text += "<div onclick=\"sucheSchritt(";
				text += schritte[i].ziele[j];
				text += ");\">> <a href=\"#\" title=\""; 
				text += sucheText(schritte[i].ziele[j]);
				text += "\">";
				text += sucheText(schritte[i].ziele[j]);
				text += "</a></div>";
				}

			if(schritte[i].alt) {
				for(var j = 0; j < schritte[i].altziele.length; j++) {
					text += "<div onclick=\"sucheSchritt(";
					text += schritte[i].altziele[j];
					text += ");\">> <a href=\"#\" title=\""; 
					text += sucheText(schritte[i].altziele[j]);
					text += "\">";
					text += sucheText(schritte[i].altziele[j]);
					text += "</a></div>";
					}
			}

			if(schritte[i].entf) {
				for(var j = 0; j < schritte[i].entf.length; j++) {
						entfalt(schritte[i].entf[j]);
					}
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

function entfalt(stelle) {

	for(var i = 0; i < schritte.length; i++) {
		if(schritte[i].id == stelle) {
			schritte[i].alt = false;
		}

	}
}

sucheSchritt(1);

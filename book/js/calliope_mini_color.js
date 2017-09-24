/* Variablen setzen */

var farbe_rot = "0";
var farbe_gruen = "0";
var farbe_blau = "0";
var aktuelle_id = ['platine'];
var farbe_calliope;
var farbe_usb;
var farbe_computer;

/* Hauptfunktion definieren */

function haupt() {

	/* Sichtbarkeit der Sprechblase */
	
	document.getElementById('sprechblaseusbcomputer').style.display = "none";
	document.getElementById('sprechblaseusbcalliopemini').style.display = "none";
	document.getElementById('usbcalliopemini').style.display = "none";
	document.getElementById('usbcomputer').style.display = "none";
	
	document.getElementById('usbmicrobstecker').onmouseover = function() {
			document.getElementById('sprechblaseusbcalliopemini').style.display = "inline";
			document.getElementById('usbcalliopemini').style.display = "inline";
	};

	document.getElementById('usbmicrobstecker').onmouseout = function() {
			document.getElementById('sprechblaseusbcalliopemini').style.display = "none";
			document.getElementById('usbcalliopemini').style.display = "none";
	};

	document.getElementById('usbastecker').onmouseover = function() {
			document.getElementById('sprechblaseusbcomputer').style.display = "inline";
			document.getElementById('usbcomputer').style.display = "inline";
	};

	document.getElementById('usbastecker').onmouseout = function() {
			document.getElementById('sprechblaseusbcomputer').style.display = "none";
			document.getElementById('usbcomputer').style.display = "none";
	};

	document.getElementById('usb').onmouseover = function() {
			document.getElementById('sprechblaseusbcalliopemini').style.display = "inline";
			document.getElementById('usbcalliopemini').style.display = "inline";
	};

	document.getElementById('usb').onmouseout = function() {
			document.getElementById('sprechblaseusbcalliopemini').style.display = "none";
			document.getElementById('usbcalliopemini').style.display = "none";
	};

	document.getElementById('computer').onmouseover = function() {
			document.getElementById('sprechblaseusbcomputer').style.display = "inline";
			document.getElementById('usbcomputer').style.display = "inline";
	};

	document.getElementById('computer').onmouseout = function() {
			document.getElementById('sprechblaseusbcomputer').style.display = "none";
			document.getElementById('usbcomputer').style.display = "none";
	};


	/* Objekt für die Änderung der Farbe auswählen */

	document.getElementById('computer').onclick = function() {
			aktuelle_id = ['computer','path2403','path3181','path3438','path3471','path3463','path3457'];

			farbe = bekommeFarbe(aktuelle_id[0]);

			farbe_rot = farbe[0];
			farbe_gruen = farbe[1];
			farbe_blau = farbe[2];

			document.getElementById('red').value = farbe_rot;
			document.getElementById('green').value = farbe_gruen;
			document.getElementById('blue').value = farbe_blau;

			document.getElementById('activeelement').innerHTML = "<sup>Farbe: Computer</sup>";
	
	};

	document.getElementById('calliopemini').onclick = function() {
			aktuelle_id = ['platine'];

			farbe = bekommeFarbe(aktuelle_id[0]);

			farbe_rot = farbe[0];
			farbe_gruen = farbe[1];
			farbe_blau = farbe[2];

			document.getElementById('red').value = farbe_rot;
			document.getElementById('green').value = farbe_gruen;
			document.getElementById('blue').value = farbe_blau;

			document.getElementById('activeelement').innerHTML = "<sup>Farbe: Calliope mini</sup>";
	};

	document.getElementById('usbkabel').onclick = function() {
			aktuelle_id = ['usbkabel','rect188-3','rect188-3-9-0','rect188-3-9'];

			farbe = bekommeFarbe(aktuelle_id[1]);

			farbe_rot = farbe[0];
			farbe_gruen = farbe[1];
			farbe_blau = farbe[2];

			document.getElementById('red').value = farbe_rot;
			document.getElementById('green').value = farbe_gruen;
			document.getElementById('blue').value = farbe_blau;

			document.getElementById('activeelement').innerHTML = "<sup>Farbe: USB-Kabel</sup>";
	};

	
	/* Farbe ermitteln - Calliope mini */

	farbe_rot = farbe_calliope[0];
	farbe_gruen = farbe_calliope[1];
	farbe_blau = farbe_calliope[2];

	document.getElementById('red').value = farbe_rot;
	document.getElementById('green').value = farbe_gruen;
	document.getElementById('blue').value = farbe_blau;

	/* Farbe bei Änderung neu setzen */

	document.getElementById('red').oninput = function() {
		farbe_rot = document.getElementById('red').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		}
	};

	document.getElementById('green').oninput = function() {
		farbe_gruen = document.getElementById('green').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		}
	};

	document.getElementById('blue').oninput = function() {
		farbe_blau = document.getElementById('blue').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		}
	};


	/* Bilder für Button (Standard, Zufall) austauschen */

	document.getElementById('standardbutton').onmousedown = function() {

		if(aktuelle_id[0] == 'usbkabel') {
			dfarbe = farbe_usb;
		}
		if(aktuelle_id[0] == 'computer') {
			dfarbe = farbe_computer;
		}
		if(aktuelle_id[0] == 'platine') {
			dfarbe = farbe_calliope;
		}

		document.getElementById('red').value = dfarbe[0];
		document.getElementById('green').value = dfarbe[1];
		document.getElementById('blue').value = dfarbe[2];
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + dfarbe[0] + "," + dfarbe[1] + "," + dfarbe[2] + ")";
		}
		document.getElementById('standardbutton').src = "images/standard_button_pressed.png";

	};
	document.getElementById('standardbutton').onmouseup = function() {
		document.getElementById('standardbutton').src = "images/standard_button.png";
	};

	document.getElementById('zufallbutton').onmousedown = function() {

		var dfarbe = [];

		dfarbe[0] = Math.round(Math.random()*255).toString();
		dfarbe[1] = Math.round(Math.random()*255).toString();
		dfarbe[2] = Math.round(Math.random()*255).toString();

		document.getElementById('red').value = dfarbe[0];
		document.getElementById('green').value = dfarbe[1];
		document.getElementById('blue').value = dfarbe[2];
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + dfarbe[0] + "," + dfarbe[1] + "," + dfarbe[2] + ")";
		}

		document.getElementById('zufallbutton').src = "images/zufall_button_pressed.png";

	};
	document.getElementById('zufallbutton').onmouseup = function() {
		document.getElementById('zufallbutton').src = "images/zufall_button.png";
	};


	/* Bilder für Farbregler (Rot, Grün, Blau) austauschen, Farbe neu setzen */

	document.getElementById('rot_links').onmousedown = function() {
		this.src = "images/rot_links_pressed.png";
		--document.getElementById('red').value;
		farbe_rot = document.getElementById('red').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		};
	};
	document.getElementById('rot_rechts').onmousedown = function() {
		this.src = "images/rot_rechts_pressed.png";
		++document.getElementById('red').value;
		farbe_rot = document.getElementById('red').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		};
	};
	document.getElementById('gruen_links').onmousedown = function() {
		this.src = "images/gruen_links_pressed.png";
		--document.getElementById('green').value;
		farbe_gruen = document.getElementById('green').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		};
	};
	document.getElementById('gruen_rechts').onmousedown = function() {
		this.src = "images/gruen_rechts_pressed.png";
		++document.getElementById('green').value;
		farbe_gruen = document.getElementById('green').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		};
	};
	document.getElementById('blau_links').onmousedown = function() {
		this.src = "images/blau_links_pressed.png";
		--document.getElementById('blue').value;
		farbe_blau = document.getElementById('blue').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		};
	};
	document.getElementById('blau_rechts').onmousedown = function() {
		this.src = "images/blau_rechts_pressed.png";
		++document.getElementById('blue').value;
		farbe_blau = document.getElementById('blue').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		};
	};

	document.getElementById('rot_rechts').onmouseup = function() {
		this.src = "images/rot_rechts.png";
	};
	document.getElementById('rot_links').onmouseup = function() {
		this.src = "images/rot_links.png";
	};
	document.getElementById('gruen_rechts').onmouseup = function() {
		this.src = "images/gruen_rechts.png";
	};
	document.getElementById('gruen_links').onmouseup = function() {
		this.src = "images/gruen_links.png";
	};
	document.getElementById('blau_rechts').onmouseup = function() {
		this.src = "images/blau_rechts.png";
	};
	document.getElementById('blau_links').onmouseup = function() {
		this.src = "images/blau_links.png";
	};
    

}

/* Farbe eines svg-Objekts per id ermitteln */

function bekommeFarbe(object) {
	
	var liste = [];

	o_farbe = document.getElementById(object).style.fill;
	o_farbe = o_farbe.replace("rgb(","");
	o_farbe = o_farbe.replace(")","");	
	o_liste_farbe = o_farbe.split(","); 

	o_farbe_rot = o_liste_farbe[0].trim();
	o_farbe_gruen = o_liste_farbe[1].trim();
	o_farbe_blau = o_liste_farbe[2].trim();

	liste = [o_farbe_rot, o_farbe_gruen, o_farbe_blau];
	
	return liste;
}


/* Standard-Farben ermitteln */

farbe_calliope = bekommeFarbe('platine'); 
farbe_usb = bekommeFarbe('rect188-3'); 
farbe_computer = bekommeFarbe('computer'); 

/* Hauptfunktion starten */

haupt();



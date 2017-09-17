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



	document.getElementById('computer').onclick = function() {
			aktuelle_id = ['computer','path2403','path3181','path3438','path3471','path3463','path3457'];

			farbe = bekommeFarbe(aktuelle_id[0]);

			farbe_rot = farbe[0];
			farbe_gruen = farbe[1];
			farbe_blau = farbe[2];

			document.getElementById('red').value = farbe_rot;
			document.getElementById('green').value = farbe_gruen;
			document.getElementById('blue').value = farbe_blau;

			document.getElementById('activeelement').innerHTML = "Farbe: Computer";
	
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

			document.getElementById('activeelement').innerHTML = "Farbe: Calliope mini";
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

			document.getElementById('activeelement').innerHTML = "Farbe: USB-Kabel";
	};

	
	farbe_rot = farbe_calliope[0];
	farbe_gruen = farbe_calliope[1];
	farbe_blau = farbe_calliope[2];

	document.getElementById('red').value = farbe_rot;
	document.getElementById('green').value = farbe_gruen;
	document.getElementById('blue').value = farbe_blau;

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

	document.getElementById('standardbutton').onmousedown = function() {
		document.getElementById('standardbutton').src = "images/standard_button_pressed.png";
	};
	document.getElementById('standardbutton').onmouseup = function() {
		document.getElementById('standardbutton').src = "images/standard_button.png";
	};

	document.getElementById('zufallbutton').onmousedown = function() {
		document.getElementById('zufallbutton').src = "images/zufall_button_pressed.png";
	};
	document.getElementById('zufallbutton').onmouseup = function() {
		document.getElementById('zufallbutton').src = "images/zufall_button.png";
	};
	document.getElementById('rot_links').onclick = function() {
		--document.getElementById('red').value;
		farbe_rot = document.getElementById('red').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		};
	};
	document.getElementById('rot_rechts').onclick = function() {
		++document.getElementById('red').value;
		farbe_rot = document.getElementById('red').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		};
	};
	document.getElementById('gruen_links').onclick = function() {
		--document.getElementById('green').value;
		farbe_gruen = document.getElementById('green').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		};
	};
	document.getElementById('gruen_rechts').onclick = function() {
		++document.getElementById('green').value;
		farbe_gruen = document.getElementById('green').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		};
	};
	document.getElementById('blau_links').onclick = function() {
		--document.getElementById('blue').value;
		farbe_blau = document.getElementById('blue').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		};
	};
	document.getElementById('blau_rechts').onclick = function() {
		++document.getElementById('blue').value;
		farbe_blau = document.getElementById('blue').value;
		for(i = 0; i < aktuelle_id.length; i++) {
			document.getElementById(aktuelle_id[i]).style.fill = "rgb(" + farbe_rot + "," + farbe_gruen + "," + farbe_blau + ")";
		};
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

/* Standardfarbe setzen */

function setzeStandardFarbe() {

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

}

/* Zufallsfarbe ermitteln */

function setzeZufallFarbe() {

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

}


/* Standard-Farben ermitteln */

farbe_calliope = bekommeFarbe('platine'); 
farbe_usb = bekommeFarbe('rect188-3'); 
farbe_computer = bekommeFarbe('computer'); 

/* Hauptfunktion starten */

haupt();


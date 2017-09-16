var farbe;
var liste_farbe;
var farbe_red = "0";
var farbe_green = "0";
var farbe_blue = "0";
var current_id = ['platine'];
var farbe_calliope;
var farbe_usb;
var farbe_computer;

function main() {
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
			current_id = ['computer','path2403','path3181','path3438','path3471','path3463','path3457'];

			farbe = getColor(current_id[0]);

			farbe_red = farbe[0];
			farbe_green = farbe[1];
			farbe_blue = farbe[2];

			document.getElementById('red').value = farbe_red;
			document.getElementById('green').value = farbe_green;
			document.getElementById('blue').value = farbe_blue;

			document.getElementById('activeelement').innerHTML = "Farbe: Computer";
	
	};

	document.getElementById('calliopemini').onclick = function() {
			current_id = ['platine'];

			farbe = getColor(current_id[0]);

			farbe_red = farbe[0];
			farbe_green = farbe[1];
			farbe_blue = farbe[2];

			document.getElementById('red').value = farbe_red;
			document.getElementById('green').value = farbe_green;
			document.getElementById('blue').value = farbe_blue;

			document.getElementById('activeelement').innerHTML = "Farbe: Calliope mini";
	};

	document.getElementById('usbkabel').onclick = function() {
			current_id = ['usbkabel','rect188-3','rect188-3-9-0','rect188-3-9'];

			farbe = getColor(current_id[1]);

			farbe_red = farbe[0];
			farbe_green = farbe[1];
			farbe_blue = farbe[2];

			document.getElementById('red').value = farbe_red;
			document.getElementById('green').value = farbe_green;
			document.getElementById('blue').value = farbe_blue;

			document.getElementById('activeelement').innerHTML = "Farbe: USB-Kabel";
	};

	
	/* 
	farbe = document.getElementById('platine').style.fill;
	farbe = farbe.replace("rgb(","");
	farbe = farbe.replace(")","");	
	liste_farbe = farbe.split(","); */

	farbe_red = farbe_calliope[0];
	farbe_green = farbe_calliope[1];
	farbe_blue = farbe_calliope[2];

	document.getElementById('red').value = farbe_red;
	document.getElementById('green').value = farbe_green;
	document.getElementById('blue').value = farbe_blue;

	document.getElementById('red').oninput = function() {
		farbe_red = document.getElementById('red').value;
		for(i = 0; i < current_id.length; i++) {
			document.getElementById(current_id[i]).style.fill = "rgb(" + farbe_red + "," + farbe_green + "," + farbe_blue + ")";
		}
	};

	document.getElementById('green').oninput = function() {
		farbe_green = document.getElementById('green').value;
		for(i = 0; i < current_id.length; i++) {
			document.getElementById(current_id[i]).style.fill = "rgb(" + farbe_red + "," + farbe_green + "," + farbe_blue + ")";
		}
	};

	document.getElementById('blue').oninput = function() {
		farbe_blue = document.getElementById('blue').value;
		for(i = 0; i < current_id.length; i++) {
			document.getElementById(current_id[i]).style.fill = "rgb(" + farbe_red + "," + farbe_green + "," + farbe_blue + ")";
		}
	};

}

function getColor(object) {
	
	var liste = [];

	o_farbe = document.getElementById(object).style.fill;
	o_farbe = o_farbe.replace("rgb(","");
	o_farbe = o_farbe.replace(")","");	
	o_liste_farbe = o_farbe.split(","); 

	o_farbe_red = o_liste_farbe[0].trim();
	o_farbe_green = o_liste_farbe[1].trim();
	o_farbe_blue = o_liste_farbe[2].trim();

	liste = [o_farbe_red, o_farbe_green, o_farbe_blue];
	
	return liste;
}

function setDefaultColor() {

	if(current_id[0] == 'usbkabel') {
		dfarbe = farbe_usb;
	}
	if(current_id[0] == 'computer') {
		dfarbe = farbe_computer;
	}
	if(current_id[0] == 'platine') {
		dfarbe = farbe_calliope;
	}

	document.getElementById('red').value = dfarbe[0];
	document.getElementById('green').value = dfarbe[1];
	document.getElementById('blue').value = dfarbe[2];
	for(i = 0; i < current_id.length; i++) {
			document.getElementById(current_id[i]).style.fill = "rgb(" + dfarbe[0] + "," + dfarbe[1] + "," + dfarbe[2] + ")";
	}

}

farbe_calliope = getColor('platine'); 
farbe_usb = getColor('rect188-3'); 
farbe_computer = getColor('computer'); 

main();


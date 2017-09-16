var farbe;
var liste_farbe;
var farbe_red = "0";
var farbe_green = "0";
var farbe_blue = "0";
var current_id = ['platine'];

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

			farbe = document.getElementById(current_id[0]).style.fill;
			farbe = farbe.replace("rgb(","");
			farbe = farbe.replace(")","");	
			liste_farbe = farbe.split(","); 

			farbe_red = liste_farbe[0].trim();
			farbe_green = liste_farbe[1].trim();
			farbe_blue = liste_farbe[2].trim();

			document.getElementById('red').value = farbe_red;
			document.getElementById('green').value = farbe_green;
			document.getElementById('blue').value = farbe_blue;

			document.getElementById('activeelement').innerHTML = "Computer";
	
	};

	document.getElementById('calliopemini').onclick = function() {
			current_id = ['platine'];

			farbe = document.getElementById(current_id[0]).style.fill;
			farbe = farbe.replace("rgb(","");
			farbe = farbe.replace(")","");	
			liste_farbe = farbe.split(","); 

			farbe_red = liste_farbe[0].trim();
			farbe_green = liste_farbe[1].trim();
			farbe_blue = liste_farbe[2].trim();

			document.getElementById('red').value = farbe_red;
			document.getElementById('green').value = farbe_green;
			document.getElementById('blue').value = farbe_blue;

			document.getElementById('activeelement').innerHTML = "Calliope mini";
	};

	document.getElementById('usbkabel').onclick = function() {
			current_id = ['usbkabel','rect188-3','rect188-3-9-0','rect188-3-9'];

			farbe = document.getElementById(current_id[1]).style.fill;
			farbe = farbe.replace("rgb(","");
			farbe = farbe.replace(")","");	
			liste_farbe = farbe.split(","); 

			farbe_red = liste_farbe[0].trim();
			farbe_green = liste_farbe[1].trim();
			farbe_blue = liste_farbe[2].trim();

			document.getElementById('red').value = farbe_red;
			document.getElementById('green').value = farbe_green;
			document.getElementById('blue').value = farbe_blue;

			document.getElementById('activeelement').innerHTML = "USB-Kabel";
	};

	

	farbe = document.getElementById('platine').style.fill;
	farbe = farbe.replace("rgb(","");
	farbe = farbe.replace(")","");	
	liste_farbe = farbe.split(","); 

	farbe_red = liste_farbe[0].trim();
	farbe_green = liste_farbe[1].trim();
	farbe_blue = liste_farbe[2].trim();

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

main();

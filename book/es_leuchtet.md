{% if book.book %}

# Calliope mini und Python

<canvas id="calliope" width="600" height="600"></canvas>

<script>
var calliope = document.getElementById('calliope');
if(calliope.getContext) {
	var context = calliope.getContext('2d');
	context.fillStyle = 'rgb(200,200,200)';
	context.fillRect(0,0,600,600);

	context.beginPath();
	context.arc(200,50,20,0,2*Math.PI);
	context.fillStyle = 'rgb(100,250,250)';
	context.fill();
	context.closePath();
	
	context.beginPath();
	context.arc(200,50,10,0,2*Math.PI);
	context.fillStyle = 'rgb(250,250,250)';
	context.fill();
	context.closePath();

	context.beginPath();
	context.arc(400,50,20,0,2*Math.PI);
	context.fillStyle = 'rgb(100,250,250)';
	context.fill();
	context.closePath();
	
	context.beginPath();
	context.arc(400,50,10,0,2*Math.PI);
	context.fillStyle = 'rgb(250,250,250)';
	context.fill();
	context.closePath();



	context.beginPath();
	context.arc(50,250,20,0,2*Math.PI);
	context.fillStyle = 'rgb(100,250,250)';
	context.fill();
	context.closePath();
	
	context.beginPath();
	context.arc(50,250,10,0,2*Math.PI);
	context.fillStyle = 'rgb(250,250,250)';
	context.fill();
	context.closePath();

	context.beginPath();
	context.arc(550,250,20,0,2*Math.PI);
	context.fillStyle = 'rgb(100,250,250)';
	context.fill();
	context.closePath();
	
	context.beginPath();
	context.arc(550,250,10,0,2*Math.PI);
	context.fillStyle = 'rgb(250,250,250)';
	context.fill();
	context.closePath();




	context.beginPath();
	context.arc(200,450,20,0,2*Math.PI);
	context.fillStyle = 'rgb(100,250,250)';
	context.fill();
	context.closePath();
	
	context.beginPath();
	context.arc(200,450,10,0,2*Math.PI);
	context.fillStyle = 'rgb(250,250,250)';
	context.fill();
	context.closePath();


	context.beginPath();
	context.arc(400,450,20,0,2*Math.PI);
	context.fillStyle = 'rgb(100,250,250)';
	context.fill();
	context.closePath();
	
	context.beginPath();
	context.arc(400,450,10,0,2*Math.PI);
	context.fillStyle = 'rgb(250,250,250)';
	context.fill();
	context.closePath();

	
	
	
	
}
</script>

{% endif %}

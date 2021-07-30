
// Create canvas variable
canvas = fabric.Canvas('myCanvas');
//Set initial positions for ball and hole images.
balx = 0;
baly = 0;
holye = 400;
holxe = 800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:holye,
			left:holxe
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:balx,
			left:baly
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((balx==holxe)&&(baly==holye)) {
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}

	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}

	function up()
	{
		// Write a code to move ball upward.
		if (baly >=0) {
			baly = baly - block_image_height;
			console.log("block_image_height = " + block_image_height);
			console.log("When up arrown key is pressed, X = " + balx + ", Y = " + baly);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if (baly <=450) {
 			baly = baly + block_image_height;
 			console.log("block_image_height = " + block_image_height);
 			console.log("When down arrown key is pressed, X = " + balx + ", Y = " + baly);
 			canvas.remove(ball_obj);
 			new_image();
	}

	function left()
	{
		if(balx >5)
		{
			// Write a code to move ball left side.
			balx = balx - block_image_width;
			console.log("block_image_width = " + block_image_width);
			console.log("When up arrown key is pressed, X = " + balx + ", Y = " + baly);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(balx <=1050)
		{
			// Write a code to move ball right side.
			balx = balx + block_image_width;
			console.log("block_image_width = " + block_image_width);
			console.log("When up arrown key is pressed, X = " + balx + ", Y = " + baly);
			canvas.remove(ball_obj);
			new_image();
		}
	}

}

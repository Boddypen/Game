// Make the game canvas
var canvas = document.getElementById("GameCanvas");
var context = canvas.getContext("2d");

// Make sure texture scaling doesn't use anti-aliasing (make sure the graphics use pixels)
context.mozImageSmoothingEnabled = false;
context.imageSmoothingEnabled = false;

// Make the main game variables
var keyboard = new Keyboard();
var player = new Player(5, 5);
var world = new World(16, 16);

// Set up frame counting (FPS)
var frameCounter = 0;
var frames = 0;

// Camera variables
var cameraX = 0;
var cameraY = 0;

// More camera variables
var displacementX = (canvas.width / 2) - (player.width / 2);
var displacementY = (canvas.height / 2) - (player.height / 2);

// Function: Clear the screen
function clear()
{
	// Set the colour
	context.fillStyle = "#87CEFA";
	
	// Fill the screen with that colour
	context.fillRect(0, 0, canvas.width, canvas.height);
}

// Function: Main game loop
function run()
{
	// Every time the game draws a frame, increase the FPS by 1
	frameCounter++;
	
	// Clear the screen
	clear();
	
	// Update Logic
		// Update the world
		world.update();
		
		// Update the player
		player.update(world.XG, world.YG);
	
	// Drawing Logic
		// Move Camera
		cameraX += (player.X - cameraX) / 5;
		cameraY += (player.Y - cameraY) / 5;
		
		// Draw the world
		world.draw(displacementX, displacementY, cameraX, cameraY);
		
		// Draw the player
		player.draw(displacementX, displacementY, cameraX, cameraY);
	
	// Make sure the next frame draws
	requestAnimationFrame(run);
}

// Frame Counter (FPS)
setInterval(function()
{
	console.log(frameCounter + " fps");
	frameCounter = 0;
}, 1000);

// MAIN PROGRAM BELOW HERE

// Clear the screen
clear();

// Start running the game
requestAnimationFrame(run);

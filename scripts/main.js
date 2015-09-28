var canvas = document.getElementById("GameCanvas");
var context = canvas.getContext("2d");

var keyboard = new Keyboard();
var player = new Player(5, 5);
var world = new World(16, 16);

function clear()
{
	context.fillStyle = "#111";
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function run()
{
	clear();
	
	// Update
	world.update();
	player.update(world.XG, world.YG);
	
	// Draw
	world.draw();
	player.draw();
	
	requestAnimationFrame(run);
}

clear();

requestAnimationFrame(run);

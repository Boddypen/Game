var Player = function(initialX, initialY)
{
	// Set the initial X and Y position
	this.X = initialX;
	this.Y = initialY;
	
	// Set the size of the player
	this.width = 128;
	this.height = 128;
	
	// Set the initial velocities of the player
	this.XV = 0;
	this.YV = 0;
	
	// Set the initial rotation
	this.rotation = 0;
}

// Function: Update the player's position, velocity, etc.
Player.prototype.update = function(XG, YG)
{
	// Increase the player's velocity by the gravity of the world
	this.XV += XG;
	this.YV += YG;
	
	// Make sure the player moves, based on the velocity
	this.X += this.XV;
	this.Y += this.YV;
	
	// Slow down the player a little bit each frame (wind resistance, terminal velocity, etc.)
	this.XV *= 0.98;
	this.YV *= 0.98;
}

// Function: Draw the player on the screen
Player.prototype.draw = function(displacementX, displacementY, cameraX, cameraY)
{
	// Set the colour
	context.fillStyle = "#FFF";
	
	// Fill a rectangle where the player is located
	context.fillRect(displacementX + (this.X) - cameraX,
			displacementY + (this.Y) - cameraY,
			this.width,
			this.height);
}

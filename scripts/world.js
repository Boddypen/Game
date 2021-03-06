var World = function(newWidth, newHeight)
{
	// Set the initial gravity of the world
	this.XG = 0;
	this.YG = 0.6;
	
	// Set the size of the world, in tiles
	this.width = newWidth;
	this.height = newHeight;
	
	// Set the size, in pixels, of each tile in the world
	this.tileWidth = 128;
	this.tileHeight = 128;
	
	// Amount of tile textures in the game
	this.tileImageAmount = 2;
	
	// Amount of levels in the game
	this.levelAmount = 1;
	
	// The current level in the game
	this.currentLevel = 0;
	
	// Create the array of tiles in the level
	// Make a new array that handles each level
	this.levels = [];
	for(var i = 0; i < this.levelAmount; i++)
	{
		console.log("Setting up level " + i);
		
		// Set up a horizontal axis for the level
		this.levels[i] = [];
		
		for(var x = 0; x < this.width; x++)
		{
			// And now a vertical axis
			this.levels[i][x] = [];
			
			for(var y = 0; y < this.height; y++)
			{
				// Fill all of the tile spaces with a random block
				this.levels[i][x][y] = Math.round(Math.random());
			}
		}
		
		console.log(this.levels[i]);
	}
	
	// Create the tile images
	// Make a new array of tiles
	this.tileImages = [];
	for(var i = 0; i < this.tileImageAmount; i++)
	{
		// The tile will be a new image
		this.tileImages[i] = new Image();
		
		// Set the image to its corresponding file in the game
		this.tileImages[i].src = "images/" + i + ".png";
	}
}

// Function: Update the world
World.prototype.update = function() {}

// Function: Draw the world
World.prototype.draw = function(displacementX, displacementY, cameraX, cameraY)
{
	// Use a double for loop to loop through every tile in the level
	for(var x = 0; x < this.width; x++)
	{
		for(var y = 0; y < this.height; y++)
		{
			// If the tile is not air... 
			if(this.levels[this.currentLevel][x][y] > 0)
			{
				// Draw it onto the screen
				context.drawImage(this.tileImages[this.levels[this.currentLevel][x][y]],
						displacementX + (x * this.tileWidth) - cameraX,
						displacementY + (y * this.tileHeight) - cameraY,
						this.tileWidth,
						this.tileHeight);
				/*
				context.fillStyle = "#EEE";
				context.fillRect(x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight);
				*/
			}
		}
	}
}

// Function: Reverse the gravity in the world
World.prototype.reverseGravity = function()
{
	// The current gravity is reversed
	this.XG *= -1;
	this.YG *= -1;
}

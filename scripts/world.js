var World = function(newWidth, newHeight)
{
	this.XG = 0;
	this.YG = 0.4;
	
	this.width = newWidth;
	this.height = newHeight;
	
	this.tileWidth = 128;
	this.tileHeight = 128;
	
	// Create the array of tiles in the level
	this.tiles = [];
	for(var x = 0; x < this.width; x++)
	{
		this.tiles[x] = [];
		for(var y = 0; y < this.height; y++)
			this.tiles[x][y] = Math.round(Math.random());
	}
}

World.prototype.update = function()
{
	this.XG = this.XG;
	this.YG = this.YG;
}

World.prototype.draw = function()
{
	for(var x = 0; x < this.width; x++)
	{
		for(var y = 0; y < this.height; y++)
		{
			if(this.tiles[x][y] > 0)
			{
				context.fillStyle = "#EEE";
				context.fillRect(x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight);
			}
		}
	}
}

World.prototype.reverseGravity = function()
{
	this.XG *= -1;
	this.YG *= -1;
}

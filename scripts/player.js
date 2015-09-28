var Player = function(initialX, initialY)
{
	this.X = initialX;
	this.Y = initialY;
	
	this.width = 128;
	this.height = 128;
	
	this.XV = 0;
	this.YV = 0;
	
	this.rotation = 0;
}

Player.prototype.update = function(XG, YG)
{
	this.XV += XG;
	this.YV += YG;
	
	this.X += this.XV;
	this.Y += this.YV;
	
	this.XV *= 0.97;
	this.YV *= 0.97;
}

Player.prototype.draw = function()
{
	context.fillStyle = "#FFF";
	context.fillRect(this.X, this.Y, this.width, this.height);
}

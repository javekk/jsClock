function numbers(){
	
	/* Numbers */
	ctx.font = vertCenter * 0.16 + "px arial"; 
	ctx.fillStyle = "#404850";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";

	r = vertCenter * 0.80;

	var x = 0;
	var y = -r;
	var angle = 0.523598776;

	ctx.fillText('12', x, y);

	for(var i = 1; i < 12; i++){
		var xx = (x * Math.cos(angle)) - (y * Math.sin(angle));
		var yy = (x * Math.sin(angle)) + (y * Math.cos(angle));
		x = xx;
		y = yy;
		ctx.fillText(i+'', x, y);	
	}
}

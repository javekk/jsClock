
function background(){
	/* Background */	
	ctx.arc(
		0,0,  //Center in 0,0
		vertCenter * 0.9, // 90% of the height 
		0,2*Math.PI); // All the way
	ctx.fillStyle = getSetValue('background-color');
	ctx.fill(); // Fill the background
}
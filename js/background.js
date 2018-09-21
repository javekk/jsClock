
function background(){

	/** 
	 * 	Background
	 *	1. Define the color (every hexadecimal color)
	 *  2. Define the shape (circle, square,)
	 */

	// Color, default grey
	var color =  getSetValue('background-color');
	ctx.fillStyle = color == undefined ? '#d8d8e0' : color;



	// Shape, default circle
	switch(getSetValue('background-shape')){
		case 'square' :
			ctx.fillRect( - vertCenter * 0.9, - vertCenter * 0.9, 
				vertCenter * 1.80, vertCenter * 1.80);
			break;
		default :
			ctx.arc(
				0,0,  //Center in 0,0
				vertCenter * 0.9, // 90% of the height 
				0,2*Math.PI); // All the way
			break;
	};
	
	//Background
	if(getSetValue('background-stroke')){
		ctx.strokeStyle = getSetValue('background-stroke-color') == undefined ? '#404850' : getSetValue('background-stroke-color');
		ctx.lineWidth = getSetValue('background-stroke-size');
		ctx.stroke();
	}
	
	ctx.fill(); // Fill the background

}

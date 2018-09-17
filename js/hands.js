function hands(){

	var date = new Date();
	var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();

		//Seconds
    seconds = (seconds * Math.PI / 30);
    hand(ctx, seconds, vertCenter*0.8, vertCenter*0.02, true);
    //Minutes
    minutes = (minutes * Math.PI / 30) + (seconds * Math.PI / (30 * 60));
    hand(ctx, minutes, vertCenter * 0.8, vertCenter * 0.05, false);
		//Hours
    hours = hours % 12;
    hours = (hours * Math.PI / 6 ) + ( minutes * Math.PI / (6 * 60)) + (seconds * Math.PI / (360 * 60));
    hand(ctx, hours, vertCenter * 0.5, vertCenter * 0.05, false);
    
    /* Center */
	ctx.beginPath();
	ctx.arc(
		0, 0, //Center in 0,0
		vertCenter * 0.07, // 10% of the height 
		 0, 2 * Math.PI); // All the way
	ctx.fillStyle = '#404850';
	ctx.fill();
    
}

function hand(ctx, pos, length, width, isSec) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = isSec ? '#f0c060' : '#404850';
    //ctx.lineCap = 'round';
    ctx.moveTo(0 , 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

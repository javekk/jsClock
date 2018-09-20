function numbers(){

	// Font and size
	var font = getSetValue('numbers-font') == undefined ? "arial" : getSetValue('numbers-font');
	ctx.font = vertCenter * getSize(getSetValue("numbers-size")) + "px " + 
			   font; 

	// Color
	var color =  getSetValue('numbers-color');
	ctx.fillStyle = color == undefined ? "#404850" : color;

	ctx.textBaseline = "middle";
	ctx.textAlign = "center";

	r = vertCenter * 0.80;

	var x = 0;
	var y = -r;
	var angle = 0.523598776;

	if(!getSetValue('roman-numbers')) ctx.fillText(12+'', x, y);	
	else ctx.fillText(getRomanNUmber(12)+'', x, y);

	for(var i = 1; i < 12; i++){
		var xx = (x * Math.cos(angle)) - (y * Math.sin(angle));
		var yy = (x * Math.sin(angle)) + (y * Math.cos(angle));
		x = xx;
		y = yy;
		if(!getSetValue('roman-numbers')) ctx.fillText(i+'', x, y);	
		else ctx.fillText(getRomanNUmber(i)+'', x, y);	
	}
}


function getRomanNUmber(arabicNumber){
	switch(arabicNumber){
		case 1 : return 'I';break;
		case 2 : return 'II';break;
		case 3 : return 'III';break;
		case 4 : return 'IV';break;
		case 5 : return 'V';break;
		case 6 : return 'VI';break;
		case 7 : return 'VII';break;
		case 8 : return 'VIII';break;
		case 9 : return 'IX';break;
		case 10 : return 'X';break;
		case 11: return 'XI';break;
		case 12 : return 'XII';break;
	}
}

// Automatically transform the size of the number [1 to 10] to a percentage
function getSize(intSize){
	var ret = 0.16; 
	switch(intSize){
		case 1 : ret = 0.09;break;
		case 2 : ret = 0.10;break;
		case 3 : ret = 0.11;break;
		case 4 : ret = 0.12;break;
		case 5 : ret = 0.13;break;
		case 6 : ret = 0.14;break;
		case 7 : ret = 0.15;break;
		case 8 : ret = 0.16;break;
		case 9 : ret = 0.17;break;
		case 10 : ret = 0.18;break;
	}
	return ret;
}
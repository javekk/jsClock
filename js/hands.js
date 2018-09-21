function hands(){

	var date = new Date();
	var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  //Seconds
  seconds = (seconds * Math.PI / 30);
  if(getSetValue("seconds-visible")) hand(ctx, seconds, 'seconds');
  //Minutes
  minutes = (minutes * Math.PI / 30) + (seconds * Math.PI / (30 * 60));
  hand(ctx, minutes, 'minutes');
  //Hours
  hours = hours % 12;
  hours = (hours * Math.PI / 6 ) + ( minutes * Math.PI / (6 * 60)) + (seconds * Math.PI / (360 * 60));
  hand(ctx, hours, 'hours');
    
  /* Center */
	ctx.beginPath();
	ctx.arc(
		0, 0, //Center in 0,0
		vertCenter * getSizeForCenter(getSetValue('center-hands-size')), 
		 0, 2 * Math.PI); // All the way
	ctx.fillStyle =  getSetValue('center-hands-color') == undefined ? '#404850' : getSetValue('center-hands-color');
	ctx.fill();  
}

//Actually draw the hand
function hand(ctx, pos, typeOfHand) {
    
    ctx.beginPath();

    //Width 
    var width = getSizeForWidth(getSetValue(typeOfHand + '-hand-width')) == undefined ? 5 : getSizeForWidth(getSetValue(typeOfHand + '-hand-width'));
    ctx.lineWidth = vertCenter * width;

    //Color
    ctx.strokeStyle = getSetValue(typeOfHand + '-hand-color') == undefined ? '#404850' : getSetValue(typeOfHand + '-hand-color');

    //Rounded or not?
    if(getSetValue(typeOfHand + '-hand-rounded')) ctx.lineCap = 'round';

    //length
    var length = getSetValue(typeOfHand + '-hand-length') == undefined ? 9 : getSetValue(typeOfHand + '-hand-length');

    //Start drawing
    ctx.moveTo(0 , 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -(vertCenter* getSizeForlength(length)));
    ctx.stroke();
    ctx.rotate(-pos);
}


// Automatically transform the size of the number [1 to 10] to a percentage
function getSizeForWidth(intSize){
	var ret = 0.02; 
	switch(intSize){
		case 1 : ret = 0.01;break;
		case 2 : ret = 0.015;break;
		case 3 : ret = 0.02;break;
		case 4 : ret = 0.025;break;
		case 5 : ret = 0.03;break;
		case 6 : ret = 0.035;break;
		case 7 : ret = 0.04;break;
		case 8 : ret = 0.045;break;
		case 9 : ret = 0.05;break;
		case 10 : ret = 0.0055;break;
	}
	return ret;
}

// Automatically transform the size of the number [1 to 10] to a percentage
function getSizeForlength(intSize){
	var ret = 0.02; 
	switch(intSize){
		case 1 : ret = 0.14;break;
		case 2 : ret = 0.21;break;
		case 3 : ret = 0.36;break;
		case 4 : ret = 0.43;break;
		case 5 : ret = 0.5;break;
		case 6 : ret = 0.57;break;
		case 7 : ret = 0.64;break;
		case 8 : ret = 0.71;break;
		case 9 : ret = 0.78;break;
		case 10 : ret = 0.85;break;
	}
	return ret;
}

// Automatically transform the size of the number [1 to 10] to a percentage
function getSizeForCenter(intSize){
	var ret = 0.02; 
	switch(intSize){
		case 1 : ret = 0.03;break;
		case 2 : ret = 0.04;break;
		case 3 : ret = 0.05;break;
		case 4 : ret = 0.06;break;
		case 5 : ret = 0.07;break;
		case 6 : ret = 0.08;break;
		case 7 : ret = 0.09;break;
		case 8 : ret = 0.10;break;
		case 9 : ret = 0.11;break;
		case 10 : ret = 0.12;break;
	}
	return ret;
}
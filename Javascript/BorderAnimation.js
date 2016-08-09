

var MidElements = document.getElementsByClassName("movingBoxMid");
var LowElements = document.getElementsByClassName("movingBoxLow");
var HighElements = document.getElementsByClassName("movingBoxHigh");


//Call each element of the class and pass to the animation function
function CheckEachBox(){

	for (var i = 0; i < MidElements.length; i++) {

           UpdateBoxes(MidElements[i]);
    }

    	for (var i = 0; i < LowElements.length; i++) {

           UpdateBoxes(LowElements[i]);
    }

    	for (var i = 0; i < HighElements.length; i++) {

           UpdateBoxes(HighElements[i]);
    }
}


function updateboxes(ThisBox){

	var Top=ThisBox.offsetTop;
	var Height=ThisBox.height;
	var Bottom=Top-Height;
//check top location
	if (Top>(WindowHeight*.5-20)){
		//above half way set to minimum
		ThisBox.className="movingBoxLow";

	}else{
       //Below half way set to minimum
       ThisBox.className="movingBoxMid";
		
	}

	if (Bottom>(WindowHeight*.5)){

		//adjust Thickness
		ThisBox.className="movingBoxHigh";

	}else{
       //Below half way set to minimum
       ThisBox.className="movingBoxMid";
		
	}


}
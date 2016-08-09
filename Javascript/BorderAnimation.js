

var MovingBoxElement = document.getElementsByClassName('movingBox')


//Call each element of the class and pass to the animation function
function CheckEachBox(){

	for (i = 0; i < MovingBoxElement.length; i++) {

           UpdateBoxes(MovingBoxElement[i]);
    }
}


function updateboxes(ThisBox){

	var Top=ThisBox.offsetTop;
	var Height=ThisBox.height;
	var Bottom=Top-Height;
	var WindowHeight=window.innerHeight;
//check top location
	if (Top>(WindowHeight*.5)){
		//above half way set to minimum
		ThisBox.style.borderTopWidth=1

	}else{
       //adjust Thickness
       ThisBox.style.borderTopWidth=5 //temp for debug test
		
	}
//check bottom location and asjust
		if (Bottom>(WindowHeight*.5)){

		//adjust Thickness
		 ThisBox.style.borderTopWidth=5//temp for debug test

	}else{
       //Below half way set to minimum
       ThisBox.style.borderTopWidth=1
		
	}


}
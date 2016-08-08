

var $maxBorderThickness=5;
var $minBorderTHickness=1;

var MovingBoxElement = document.getElementsByClassName('movingBox')


//Call each element of the class and pass to the animation function
function CheckEach(){

	for (i = 0; i < MovingBoxElement.length; i++) {

           UpdateBoxes(MovingBoxElement[i]);
    }
}


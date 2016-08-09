var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
 
var transforms = ["transform", 
                  "msTransform", 
                  "webkitTransform", 
                  "mozTransform", 
                  "oTransform"];
                   
var transformProperty = getSupportedPropertyName(transforms);
 
var Layer_Far = document.querySelector("#parallaxFar");
var Rate_Far = 0.5;
var Layer_Mid = document.querySelector("#parallaxMid");
var Rate_Mid = 0.75;
var Layer_Main = document.querySelector("#parallaxMain");
var Rate_Main = 1;
var Layer_Near = document.querySelector("#parallaxNear");
var Rate_Near = 1.75;
 
var scrolling = false;
var mouseWheelActive = false;
 
var count = 0;
var mouseDelta = 0;

var MidElements = document.getElementsByClassName("movingBoxMid");
var LowElements = document.getElementsByClassName("movingBoxLow");
var HighElements = document.getElementsByClassName("movingBoxHigh");


setup(); 
//
// vendor prefix management
//
function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != "undefined") {
            return properties[i];
        }
    }
    return null;
}
 
function setup() {
    window.addEventListener("scroll", setScrolling, false);
     
    // deal with the mouse wheel
    window.addEventListener("mousewheel", mouseScroll, false);
    window.addEventListener("DOMMouseScroll", mouseScroll, false);
     
    animationLoop();

}
 
function mouseScroll(e) {
    mouseWheelActive = true;
         
    // cancel the default scroll behavior
    if (e.preventDefault) {
        e.preventDefault();
    }
     
    // deal with different browsers calculating the delta differently
    if (e.wheelDelta) {
        mouseDelta = e.wheelDelta / 60;
    } else if (e.detail) {
        mouseDelta = -e.detail / 6;
    }
}
 
//
// Called when a scroll is detected
//
function setScrolling() {
    scrolling = true;
}
 
//
// Cross-browser way to get the current scroll position
//
function getScrollPosition() {
    if (document.documentElement.scrollTop == 0) {
        return document.body.scrollTop;
    } else {
        return document.documentElement.scrollTop;
    }
}
 
//
// A performant way to shift our image up or down
//
function setTranslate3DTransform(element, yPosition) {
    var value = "translate3d(0px" + ", " + yPosition + "px" + ", 0)";
    element.style[transformProperty] = value;
}
 
function animationLoop() {

    // adjust the image's position when scrolling
    if (scrolling) {
        setTranslate3DTransform(Layer_Far, 
                                -1 * getScrollPosition() * Rate_Far);
        setTranslate3DTransform(Layer_Mid, 
                                -1 * getScrollPosition() * Rate_Mid);
                setTranslate3DTransform(Layer_Main, 
                                -1 * getScrollPosition() * Rate_Main);
        setTranslate3DTransform(Layer_Near, 
                                -1 * getScrollPosition() * Rate_Near);
        scrolling = false;
        CheckEachBox();//Also Call the border animation

    }
     
    // scroll up or down by 10 pixels when the mousewheel is used
    if (mouseWheelActive) {
        window.scrollBy(0, -mouseDelta * 10);
        count++;
         
        // stop the scrolling after a few moments
        if (count > 20) {
            count = 0;
            mouseWheelActive = false;
            mouseDelta = 0;
        }
    }
         
    requestAnimationFrame(animationLoop);

}

//Border Animation Call
//Call each element of the class and pass to the animation function
function CheckEachBox(){

    for (var i = 0; i < MidElements.length; i++) {

        var $Top=MidElements[i].offsetTop;
        var $Height=MidElements[i].height;
        var $Bottom=Top-Height;

        if ($Top>(WindowHeight*.5)){
        //above half way set to minimum
        MidElements[i].className="movingBoxLow";
         }else{
       //Below half way set to minimum
       MidElements[i].className="movingBoxMid";
        }

        if ($Bottom<(WindowHeight*.5)){
        //above half way set to minimum
        MidElements[i].className="movingBoxHigh";
         }else{
       //Below half way set to minimum
       MidElements[i].className="movingBoxMid";
        }

    }

    }

        for (var i = 0; i < LowElements.length; i++) {
        var $Top=LowElements[i].offsetTop;
        var $Height=LowElements[i].height;
        var $Bottom=Top-Height;

        if ($Top>(WindowHeight*.5)){
        //above half way set to minimum
        LowElements[i].className="movingBoxLow";
         }else{
       //Below half way set to minimum
       LowElements[i].className="movingBoxMid";
        }

        if ($Bottom<(WindowHeight*.5)){
        //above half way set to minimum
        LowElements[i].className="movingBoxHigh";
         }else{
       //Below half way set to minimum
       LowElements[i].className="movingBoxMid";
        }
    }

        for (var i = 0; i < HighElements.length; i++) {

        var $Top=HighElements[i].offsetTop;
        var $Height=HighElements[i].height;
        var $Bottom=Top-Height;

        if ($Top>(WindowHeight*.5)){
        //above half way set to minimum
        HighElements[i].className="movingBoxLow";
         }else{
       //Below half way set to minimum
       HighElements[i].className="movingBoxMid";
        }

        if ($Bottom<(WindowHeight*.5)){
        //above half way set to minimum
        HighElements[i].className="movingBoxHigh";
         }else{
       //Below half way set to minimum
       HighElements[i].className="movingBoxMid";
        }
    }
}





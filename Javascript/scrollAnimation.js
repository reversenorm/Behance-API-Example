
 
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
 
var Layer_far = document.querySelector("#parallaxFar");
var Rate_far = 0.5;


 
var scrolling = false;
var mouseWheelActive = false;
 
var count = 0;
var mouseDelta = 0;

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
        mouseDelta = e.wheelDelta / 60; //if IE or edge cut into smaller steps to slow down scroll
    } else if (e.detail) {
        mouseDelta = -e.detail / 10; //others cut up a bit for scroll step but more generally
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
        setTranslate3DTransform(Layer_far, 
                                -1 * getScrollPosition() * Rate_far);

        scrolling = false;
    }
     
    // scroll up or down by 10 pixels when the mousewheel is used
    if (mouseWheelActive) {
        window.scrollBy(0, -mouseDelta * 10);
        count++;
         
        // stop the scrolling after a few moments ***this is a drift amount for ease out of motion. Not effective in IE
        if (count > 25) {
            count = 0;
            mouseWheelActive = false;
            mouseDelta = 0;
        }
    }
         
    requestAnimationFrame(animationLoop);
}

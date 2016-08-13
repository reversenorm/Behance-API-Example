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
var Layer_Mid_Sunrise = document.querySelector("#Sunrise");
var Rate_Mid_Sunrise = 0.75;
var Layer_Mid_Satellite = document.querySelector("#Satellite");
var Rate_Mid_Satellite = 0.75;
var Layer_Main = document.querySelector("#parallaxMain");
var Rate_Main = 1;
var Layer_Near = document.querySelector("#parallaxNear");
var Rate_Near = 1.75;
 
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
    // if (e.preventDefault) {
    //     e.preventDefault();
    // }
     
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
        setTranslate3DTransform(Layer_Far, -1 * getScrollPosition() * Rate_Far);
        setTranslate3DTransform(Layer_Mid_Sunrise, -1 * getScrollPosition() * Rate_Mid_Sunrise);
        setTranslate3DTransform(Layer_Mid_Satellite, -1 * getScrollPosition() * Rate_Mid_Satellite);
        setTranslate3DTransform(Layer_Main, -1 * getScrollPosition() * Rate_Main);
        setTranslate3DTransform(Layer_Near,  -1 * getScrollPosition() * Rate_Near);

        scrolling = false;
        
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







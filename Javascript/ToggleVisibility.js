
 function toggleAbout(PassedID) {
    var x = document.getElementById(PassedID);
    if(x.style.display=="none" || x.style.display=="null" || x.style.display==""){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
    
 }

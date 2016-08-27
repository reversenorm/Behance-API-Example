
 function toggleLayer(PassedID) {
    var x = document.getElementById(PassedID);
    if(x.style.display=="none" || x.style.display=="null" || x.style.display==""){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
    
 }

 function toggleOffAllGalleries() {
        document.getElementById("deviantArtGallery").style.display = "none";
        document.getElementById("behanceGallery").style.display = "none";


        document.getElementById("overlay").style.display = "none";
 }

var DeviantProjects = XMLLoader("http://backend.deviantart.com/rss.xml?type=deviation&q=gallery%3Areversenorm%2F60005484");
        function XMLLoader(filePath){
			var DeviantData = (function () {
		    	var XMLFile = null;
			   		 $.ajax({
				        'async': false,
				        'global': false,
				        'url':  filePath,
				        'dataType': "xml",
				        'success': function (data) {
				            XMLFile = data;
			        }
			   		 });
			   		 	return XMLFile;
					})(); 
			return DeviantData;
		};//end XML loader


		function openDeviation(DeviationNumber, FromThumb){
			if(FromThumb=="FromThumb"){//If we come from a thumb toggle the overlay otherwise just build the next image
			toggleLayer('overlay');//turn on overlay
			toggleLayer('deviantArtGallery');//then turn on the specific gallery
			};
			document.getElementById("deviantArtGallery").innerHTML=DeviationGalleryBuilder(DeviationNumber);
		};

		function DeviationGalleryBuilder(DeviationNumber){

			//Handle next and previous identifiers so they will click trhough
			var NextDeviation=DeviationNumber+1;

			var PerviousDeviation=DeviationNumber-1;

			if (NextDeviation>=DeviantProjects.getElementsByTagName("channel")[0].getElementsByTagName("item").length){ 
				NextDeviation=0;
			};

			if (PerviousDeviation<0){
				PerviousDeviation=DeviantProjects.getElementsByTagName("channel")[0].getElementsByTagName("item").length-1;
				
			};
			
			//end previous and next identification

			var DeviantImageURL=DeviantProjects.getElementsByTagName("channel")[0].getElementsByTagName("item")[DeviationNumber].getElementsByTagNameNS('http://search.yahoo.com/mrss/', 'content')[0].getAttribute('url');


			var DeviantImageSiteURL=DeviantProjects.getElementsByTagName("channel")[0].getElementsByTagName("item")[DeviationNumber].getElementsByTagName("link")[0].childNodes[0].nodeValue;

			var DeviantTitle=DeviantProjects.getElementsByTagName("channel")[0].getElementsByTagName("item")[DeviationNumber].getElementsByTagName("title")[0].childNodes[0].nodeValue;


			var htmlString="<div class='closeX'><a href='#d' onclick="+'toggleOffAllGalleries(); '+' toggleLayer("overlay");'+"align='right'>[X]</a></div><div id='PreviousArrow'><a href='#"+PerviousDeviation+"' onclick='openDeviation("+PerviousDeviation+", "+null+");'>PREVIOUS</a></div><div id='liveDeviation' ><div id='liveDeviationTitle'>";//add in the gallery description section

			htmlString=htmlString.concat("<h1>"+DeviantTitle+"</h1><br/></div>");//add title to lightbox display and close LiveDeviationTitle div

			//add the main image and put it in a div tag with a link out to deviant art page
			htmlString=htmlString.concat("<div id='liveDeviationImage'><a href='"+DeviantImageSiteURL+"' target='_blank'><img src='"+DeviantImageURL+"' ></a></div>");


			htmlString = htmlString.concat("</div><div id='NextArrow'><a href='#"+NextDeviation+"' onclick='openDeviation("+NextDeviation+", "+null+");'>NEXT</a></div>");//close LiveDeivation Div and add nextDeviation button link

			return htmlString;

				};

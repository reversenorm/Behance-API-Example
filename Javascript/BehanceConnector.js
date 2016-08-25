

        var BehanceProjects = jsonLoader("/BehanceJSON/jphillips01_projects.json");

        function jsonLoader(filePath){

			var BehanceData = (function () {
		    	var jason = null;
			   		 $.ajax({
				        'async': false,
				        'global': false,
				        'url':  filePath,
				        'dataType': "json",
				        'success': function (data) {
				            json = data;
			        }
			   		 });
			   		 	return json;
					})(); 

			return BehanceData;

		};//end json loader

		function openGallery(galleryId){
			toggleLayer('overlay');//turn on overlay
			toggleLayer('behanceGallery');//then turn on the specific gallery
			document.getElementById("behanceGallery").innerHTML=galleryBuilder(galleryId);
		};

		function galleryBuilder(galleryId){

			var galleryData=jsonLoader("/BehanceJSON/BehanceGallery/"+galleryId+".json");

			var htmlString="<div class='closeX'><a href='#c' onclick="+'toggleOffAllGalleries(); '+' toggleLayer("overlay");'+"align='right'>[X]</a></div><div class='galleryDescription'>"//add in the gallery description section

			htmlString=htmlString.concat("<h1>"+galleryData["project"]["name"]+"</h1><br/>");//add gallery title

			if(galleryData["project"]["modules"][0]["type"]=="text"){
				htmlString=htmlString.concat(galleryData["project"]["modules"][0]["text"]+"<br/>");//add in description text from first module item if item is text.
			}

			htmlString=htmlString.concat("<a href='"+galleryData["project"]["url"]+"' target='_blank'>View on Behance.net</a>");//add in link to view on behance

			htmlString=htmlString.concat("</div><div class='viewWindow'><ul>");//close gallery description div and open viewWindow div. Also open UL for each image w/ description



			for(var i=0; i<galleryData["project"]["modules"].length; i++){ //for each module item
				if(galleryData["project"]["modules"][i]["type"]=="image"){//if it's an image

				htmlString = htmlString.concat("<li><img src='"+galleryData["project"]["modules"][i]["sizes"]["disp"]+"' align='center'>");

					if(galleryData["project"]["modules"][i]["caption_plain"]){//if there is a caption

						htmlString = htmlString.concat("<br/>"+galleryData["project"]["modules"][i]["caption_plain"]+"</li>"); //then add caption to html inside list element

					}else{
						htmlString = htmlString.concat("</li>");//if no caption just close after the image
					}

				}else if(galleryData["project"]["modules"][i]["type"]=="video"){//if the file is a video instead

					htmlString = htmlString.concat("<li>"+galleryData["project"]["modules"][i]["embed"]);
					//add video embed link
					if(galleryData["project"]["modules"][i]["caption_plain"]){//if there is a caption

						htmlString = htmlString.concat("<br />"+galleryData["project"]["modules"][i]["caption_plain"]+"</li>"); //then add caption to html inside list element

					}else{
						htmlString = htmlString.concat("</li>");//if no caption just close after the image
					}
				}

			};
				htmlString = htmlString.concat("</ul><br/></div>");
				//close list and close viewWindow div
			return htmlString;

		};
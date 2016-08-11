<html>

<head>

</head>

<body>


<?php
# User URL 
#http://www.behance.net/v2/users/jphillips01?api_key=bM1DZSpebEhtZlRUq9QKuUmF3PpdW595

#projects URL
#http://www.behance.net/v2/users/jphillips01/projects?api_key=bM1DZSpebEhtZlRUq9QKuUmF3PpdW595

#Project Content *NOTE must add in project ID to link
#http://www.behance.net/v2/projects/{project_id}?api_key=bM1DZSpebEhtZlRUq9QKuUmF3PpdW595
 
$behance_user = file_get_contents("https://www.behance.net/v2/users/jphillips01?api_key=bM1DZSpebEhtZlRUq9QKuUmF3PpdW595");
$userData = json_decode($behance_user, true);

$behance_projects = file_get_contents("http://www.behance.net/v2/users/jphillips01/projects?api_key=bM1DZSpebEhtZlRUq9QKuUmF3PpdW595"); //get .json file from behance with relevant data, note this is my api key
$projects_info = json_decode($behance_projects, true); //convert the string from behance into an array
 
foreach ($userData as $user_details => $user) 
{
    // Displays profile image (Sizes: 50, 100, 115, 230, 138, 276)
    echo '<img src="'. $user['images']['138'] . '" /> </br>';
    
}

echo '<div id="Behance"> <ul>';//make a div and unordered list to put the project covers into

 foreach ($projects_info as $projects_info_details => $proj_data){//parse each project according to the field and data within that

 	echo'<li class="portfolio-item">'//Open list element
 	echo'<imgsrc="'.$proj_data['covers']['404'].'" /><br />';//import large scale cover image from behance and return
 	echo $proj_data['name'];//print name of project from behance
 	echo'</li>';//close list element

 }

 echo '</ul> </div>';


?> 

</body>


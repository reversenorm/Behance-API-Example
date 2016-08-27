This repository is a simple demonstration of how I imported data from my http://www.Behance.net personal account using exclusively Javascript so I could house it on my GITHUB HTML page. PHP would have been a better tool but I'm working under the limitations of GitHub Pages which does not support server side commands. The full demonstration of this functionality can be found on http://technecreative.com under the Design Section or as a stand alone at http://technecreative.com/BehanceBasicLoader.html.

The first thing you must do to impliment the the use of any Behance data is to register your website or app with behance at: https://www.behance.net/dev/

Once you have your site registered you will get an API_KEY from behance. This will be necissiary to call the behance site. The basic commands are as follows:

This gets the user info:
http://www.behance.net/v2/users/{user_id}?api_key={the_api_key}&callback=?

This gets the list of projects by a praticular user:
http://www.behance.net/v2/users/{user_id}/projects?api_key={the_api_key}&callback=?

This gets the information for a particular project:
http://www.behance.net/v2/projects/{project_id}?api_key={the_api_key}&callback=?

These each respond with a JSON file. Also the callback=? is required to function. If you type the URL without it into your browser you will see the JSON file just fine but if you call the URL from an outside domain you will recieve an error because of the same-origin policy (https://en.wikipedia.org/wiki/Same-origin_policy). The workaround Behance has imlemented on their back end uses the callback=? as a wrapper. 

Additionally Behance limits the number of these kinds of requests serverside, about 150 per hour. So if you have a very high traffic site or if you have a lot of intensive calls you may need another method. 

It's also useful to get JSON View from https://jsonview.com/ this will allow you to simly paste the URL into your browser and easily view the JSON data from the Behance Website.

It is important to note that Behance is relatively slow in returning the data, that combined with the fact that async:false in depricated in Ajax means that you have to seperate out your calls with the use of the .complete tag within the ajax request or your page will load before your data comes through.


Hope you find this useful.
~Reversenorm


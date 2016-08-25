Technecreative.com

This repository is to host my personal portfolio website. My goal with this project is to showcase my various skill sets. I intend to link up with my various online presences covering art, design as well as linking in some coding examples from github itself.

There are several different sets of code on display here. First is scrolling animation that creates a parallax effect. This is done with event listeners on the mouse as well as some css positioning and scaling tricks. A simplified version of this method can be found at https://github.com/reversenorm/parallax-scrolling. Additionally I added in a few CSS styling tricks, like use of clipping masks, transparencies, and drop shadow (used to create glow) for stylistic effect.

The next element of code demonstrated here is the use of the BeHance API to port their JSON readout of my portfolio content, posted on their website, into this site. Ideally this would be handled serverside with a PHP or similar script, especially because PHP parses JSON files easily, but GIT as a hosting site doesn't support serverside functionality. So I develiped a javascript, with a dose of Jquery, to import and parse the JSON files from Behance. A simplified version of this method can be found at XXXX.  The problem then arose that since technecreative.com and behance.net are different domains behance wouldn't serve the JSON to this GIT page directly due to the same origin policy (https://en.wikipedia.org/wiki/Same-origin_policy). In the end I downloaded the JSON files locally, while they still pointed out to get the actual images. The drawback is that I have to manually uodate these JSON files if I change my Behance page. 

The third coding solution on this page is porting gallery data from the DeviantArt website. DeviantArt uses an XML based RSS URL that allows any user to grab data from the website. Since I'm not adding favorites or otherwise changing the userdata I did not need to use the full API DeviantArt supports. Instead I just took the data from the XML document and used that to generate the gallery from the images and info housed on DeviantArt. A version of this method can be found at XXXX.



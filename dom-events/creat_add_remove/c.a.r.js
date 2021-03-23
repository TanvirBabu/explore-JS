// Creating HTML Element

var heading3 = document.createElement("h2");
var text = document.createTextNode('Good bye  👋')
heading3.appendChild(text);

var myDiv = document.getElementById("my-div")
myDiv.appendChild(heading3)



//Remove Element from HTML

var heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);


// Creating HTML Element top

var heading0 = document.createElement("h1");
var text0 = document.createTextNode('Introduce myself.')
heading0.appendChild(text0);
heading1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0, heading1)



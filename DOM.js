
var image=document.querySelector("img");

image.style.marginLeft="70%";

// Copy the image
var cln = image.cloneNode(true);

//put it in the end of the body
document.body.appendChild(cln);

//repositioning it
cln.style.marginLeft="10%";

document.getElementById("nav").style.listStyle = "circle inside";

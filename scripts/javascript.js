const options =  {year: 'numeric'};
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', options);

let text = "This document was last modified" + " " + document.lastModified;
document.getElementById("modified").innerHTML = text;
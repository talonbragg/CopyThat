/*
* CopyThat 0.1.0
* Copyright 2016, Talon Bragg
* https://github.com/talonbragg/CopyThat/
* Listed under the Apache 2.0.0 license.
* https://copythat.ml
*/
var copyThat=document.getElementById("copy");selectText=function(a){var b,c;document.body.createTextRange?(b=document.body.createTextRange(),b.moveToElementText(a),b.select()):window.getSelection&&(c=window.getSelection(),b=document.createRange(),b.selectNodeContents(a),c.removeAllRanges(),c.addRange(b))},copyColor=function(a){var b=a.target;selectText(b);try{var c=document.execCommand("copy"),d=c?"successful.":"unsuccessful.";alert("Copy"+d)}catch(a){console.log("Unable to copy on this browser.")}},copyThat.addEventListener("click",copyColor);

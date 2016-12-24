var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
window.onblur = function () { document.title = 'Please Come Back!'; }
window.onfocus = function () { document.title = 'Copy That'; }


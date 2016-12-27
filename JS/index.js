var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
    var closeIcon = document.getElementById('navBtn');
function openNav() {
            if(document.getElementById('mySidenav').style.width === "0") {
                    document.getElementById("mySidenav").style.width = "250px"; document.getElementById("main").style.marginLeft = "250px"; document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
                }
            else if(document.getElementById('mySidenav').style.width === "0") {
                    document.getElementById("mySidenav").style.width = "0";
                    document.getElementById("main").style.marginLeft = "0";
                    document.body.style.backgroundColor = "white";
            }
            }
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            document.body.style.backgroundColor = "white";
        }
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}

window.onblur = function () { document.title = 'Please Come Back!'; }
window.onfocus = function () { document.title = 'Copy That'; }


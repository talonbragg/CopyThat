var myVar,
    open = false;
var time;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
    var closeIcon = document.getElementById('navBtn');
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
function openNav() {  
    if(open) {
        open = false;
                    document.getElementById("mySidenav").style.width = "0";
                    document.body.style.backgroundColor = "white";
                    time = setTimeou('showLink', 1000);
                    function showLink() {
                        $('#navLink').slideIn('slow');
                    }
            }
    else {
        open = true;
        document.getElementById("mySidenav").style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
            }
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            document.body.style.backgroundColor = "white";
        }
window.onblur = function () { document.title = 'Please Come Back!'; }
window.onfocus = function () { document.title = 'Copy That'; }


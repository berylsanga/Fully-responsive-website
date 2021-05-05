var menuBtn = document.getElementById("menu-button");
var sideMenu = document.getElementById("side-menu");

sideMenu.style.right = "-300px";
menuBtn.onclick = function() {
    if (sideMenu.style.right == "-300px") {
        sideMenu.style.right = "0";
    } else {
        sideMenu.style.right = "-300px";
    }
}

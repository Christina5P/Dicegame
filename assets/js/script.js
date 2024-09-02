console.log ("js loaded");

function toggle() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
        if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


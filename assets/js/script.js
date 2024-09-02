console.log("js loaded");


const euro = document.querySelectorAll(".image");
let selectedImage = null;
const buttons = document.querySelectorAll(".control");
let picknumberElement = document.getElementById("picknumber"); 


// toggle menu on smaller devices
function toggle() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
        if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

 // Listener click to save pick img
     euro.forEach(image => {
         image.addEventListener("click", function () {
             selectedImage = image;
             
      euro.forEach(img => {
            if (img !== selectedImage) {
                img.classList.add("hidden");
            }
      });
        selectedImage.classList.add("selected");
        selectedImage.classList.remove("hidden");
    });
});
            


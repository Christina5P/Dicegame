console.log("js loaded");


const euro = document.querySelectorAll(".image");
const buttons = document.querySelectorAll(".control");
const picknumberElement = document.getElementById("picknumber");
let selectedImage = null;
let maxChoices = 1;
let choicecounter = 0;
const playerChoices = [];


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
               console.log("Image clicked:", selectedImage);
             
      euro.forEach(img => {
            if (img !== selectedImage) {
                img.classList.add("hidden");
            }
      });
        selectedImage.classList.add("selected");
             selectedImage.classList.remove("hidden");
              updatePickNumber(selectedImage);
    });
     });
       
// text-instructions how may number to pick
function updatePickNumber(selectedImage) {
    if (selectedImage) {
        if (selectedImage.id === "100") {
            maxChoices = 1;
           picknumberElement.textContent = "Now you can pick 1 number";
        } else if (selectedImage.id === "50") {
            maxChoices = 2;
            picknumberElement.textContent = "Now you can pick 2 numbers";
              
        } else if (selectedImage.id === "10") {
            maxChoices = 3;
            picknumberElement.textContent = "Now you can pick 3 numbers";
        }
    }
}
       
// change color of picked numbers

function changeBoardColor(event, maxChoices) {
    if (choicecounter < maxChoices) {
        event.target.style.backgroundColor = "#FFFFFF";
        playerChoices.push(event.target.value);
        choicecounter++;
    }
}

// event listener
 buttons.forEach(button => {
    button.addEventListener("click", function(event) {
    changeBoardColor(event, maxChoices);
    });
});
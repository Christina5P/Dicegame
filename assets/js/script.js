console.log("js loaded");


const euro = document.querySelectorAll(".image");
const buttons = document.querySelectorAll(".control");
const picknumberElement = document.getElementById("picknumber");
const rollInstructionsElement = document.getElementById("rollInstructions");
let selectedImage = null;
let maxChoices = 0;
let choicecounter = 0;
let playerChoices = [];
let playerHasChosen = false;
let messageElement = document.getElementById("result");
const playButton = document.getElementById("play");
const winner_img = document.createElement("img");
winner_img.src = "assets/images/win.png", alt="winner" 
const loser_img = document.createElement("img");
loser_img.src = "assets/images/lose.png", alt = "looser"

// Toggle menu on smaller devices
function toggle() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
        if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

 //  Event listener for image clicks
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
       
// Text-instructions how may number to pick
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


 // Event listener for number clicks
buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        changeBoardColor(event, maxChoices);
        updateRollinstructions(playerChoices);
    });
});

// Change color of picked numbers
function changeBoardColor(event, maxChoices) {
    if (choicecounter < maxChoices) {
        event.target.style.backgroundColor = "#FFFFFF";
        playerChoices.push(event.target.value);
        choicecounter++;
    }
}

// Text instructions to roll dice
function updateRollinstructions(playerChoices) {
    if (!selectedImage) {
        alert("Please make a bet before picking numbers!");
        return;
    }
    if (playerChoices.length === maxChoices) {
        rollInstructionsElement.textContent = `You have picked ${maxChoices} number(s). You can now roll the dice`;
        playerHasChosen = true;
    } else {
        rollInstructionsElement.textContent = `Please pick ${maxChoices} number(s) before rolling the dice.`;
    } 
}
// Function to compare playerschoice with dice and resultvideo
function checkAnswer(randomNumber) {
    let selectedImage = document.querySelector(".image.selected");

    setTimeout(() => {
        if (selectedImage && playerChoices.includes(randomNumber.toString())) {
            switch (selectedImage.id) {
                case "10":
                    messageElement.textContent = "You won 10 euros!";
                    break;
                case "50":
                    messageElement.textContent = "You won 50 euros!";
                    break;
                case "100":
                    messageElement.textContent = "You won 100 euros!";
                    break;
            }
            messageElement.appendChild(winner_img);
        } else {
            messageElement.textContent = "You lost";
            messageElement.appendChild(loser_img);
        }
        
        console.log(randomNumber);
    }, 4000); 
}

// create a "div" for dice, create randomnumber
let diceContainer = document.getElementById("diceContainer");
let randomNumber = Math.floor(Math.random() * 6) + 1;

//create Dice with dots and position 
function createDice(randomNumber) {
    let dice = document.createElement("div");
    dice.classList.add("dice");

    for (let i = 1; i <= 6; i++) {
        let face = document.createElement("div");
        face.classList.add("dice-face", `dice-face--${i}`);
    
    let dotPositionMatrix = {
   1: [[50, 50]],
   2: [[20, 20], [80, 80]],
   3: [[20, 20], [50, 50], [80, 80]],
   4: [[20, 20], [20, 80], [80, 20], [80, 80]],
   5: [[20, 20], [20, 80], [50, 50], [80, 20], [80, 80]],
   6: [[20, 20], [20, 80], [50, 20], [50, 80], [80, 20], [80, 80]]
 };
    
for (let dotPosition of dotPositionMatrix[i]) {
   let dot = document.createElement("span");
   dot.classList.add("dice-dot");
   dot.style.setProperty("--top", dotPosition[0] + "%");
   dot.style.setProperty("--left", dotPosition[1] + "%");
   face.appendChild(dot);
}
dice.appendChild(face);
}
return dice;
}

// Call for parent element from DOM and add a childelement
let dice = createDice(randomNumber);
diceContainer.appendChild(dice);


// To roll the dice 
dice.addEventListener("click", function () {
       if (!playerHasChosen) {
        alert("Please make a bet before rolling the dice!");
        return; 
    } else
        dice.classList.remove("show-1", "show-2", "show-3", "show-4", "show-5", "show-6");
    dice.classList.add(`show-${randomNumber}`);
    dice.classList.add("animate");
    playerChoices.push(randomNumber);
    checkAnswer(randomNumber);
});

const playButton = document.getElementById("play");

function newgame() {
    playButton.addEventListener("click", function (newgame) {
         window.scrollTo(0, 0);
        location.reload();
        });
}
 newgame();

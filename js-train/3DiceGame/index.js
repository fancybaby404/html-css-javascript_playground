let tie = false;
let p1Win = false;
let p2Win = false;
let randomNum1 = 0;
let randomNum2 = 0;

diceImages = [
    "images/inverted-dice-1.svg",
    "images/inverted-dice-2.svg",
    "images/inverted-dice-3.svg",
    "images/inverted-dice-4.svg",
    "images/inverted-dice-5.svg",
    "images/inverted-dice-6.svg",
];

let btn = document.querySelector("#btn");
btn.onclick = function changeDice() {
    // reset values
    tie = false;
    p1Win = false;
    p2Win = false;
    randomNum1 = 0;
    randomNum2 = 0;
    
    randomNum1 = Math.floor(Math.random() * 6 + 1);
    randomNum2 = Math.floor(Math.random() * 6 + 1);
    
    // play animation
    document.querySelector('.game-results').classList.toggle("f-popout");

    document
        .querySelectorAll(".P1")
        .forEach((item) =>
            item.setAttribute("src", `images/inverted-dice-${randomNum1}.svg`)
        );

    document
        .querySelectorAll(".P2")
        .forEach((item) =>
            item.setAttribute("src", `images/inverted-dice-${randomNum2}.svg`)
        );

    if (randomNum1 === randomNum2) {
        tie = true;
    } else if (randomNum1 > randomNum2) {
        p1Win = true;
    } else if (randomNum2 > randomNum1) {
        p2Win = true;
    }

    if (tie === true) {
        document.querySelector(".game-results").innerHTML = "It's a tie! 🏳 ";
        document.querySelector(".player1-text-desktop").style = "color: white;";
        document.querySelector(".player2-text-desktop").style = "color: white;";
        document.querySelector(".player1-text-mobile").style = "color: white;";
        document.querySelector(".player2-text-mobile").style = "color: white;";
    } else if (p1Win === true) {
        document.querySelector(".game-results").innerHTML =
            "Player 1 Wins! 👏 ";
        document.querySelector(".player1-text-desktop").style = "color: green;";
        document.querySelector(".player2-text-desktop").style = "color: red;";
        document.querySelector(".player1-text-mobile").style = "color: green;";
        document.querySelector(".player2-text-mobile").style = "color: red;";
    } else if (p2Win === true) {
        document.querySelector(".game-results").innerHTML =
            "Player 2 Wins! 👏 ";
        document.querySelector(".player1-text-desktop").style = "color: red;";
        document.querySelector(".player2-text-desktop").style = "color: green;";
        document.querySelector(".player1-text-mobile").style = "color: red;";
        document.querySelector(".player2-text-mobile").style = "color: green;";
    }
};

console.log(diceImageDesktop);
console.log(diceImageMobile);

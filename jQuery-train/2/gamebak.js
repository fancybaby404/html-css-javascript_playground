// Game Variables
let gameActive = false;
var level = 0;
let gameNumbers = [];
let playerNumbers = [];
let startedOnce = 0;
let playRandom = false;

// audio
let greenAudio = new Audio("./sounds/green.mp3");
let redAudio = new Audio("./sounds/red.mp3");
let yellowAudio = new Audio("./sounds/yellow.mp3");
let blueAudio = new Audio("./sounds/blue.mp3");

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function updateLevel(level) {
    console.log("updating Level");
    $("h1").html(`<h1 id="level-title">Level ${level}</h1>`);
}

function clickButton(index) {
    console.log("Simulated Click!");
    $(".btn").eq(index).addClass("pressed");

    setTimeout(function () {
        $(".btn").eq(index).removeClass("pressed");
    }, 500);
}

function gameOver() {
    if (startedOnce > 0 && gameActive == false) {
        console.log("Game Over");
        $("h1").html("<h1>Game Over</h1>");
        $("h1").addClass("game-over");

        let gameOverSound = new Audio("./sounds/wrong.mp3");
        gameOverSound.play();
    }
}

// play game when any key is pressed
$(document).on("keydown", function (event) {
    if (event.key == "Enter") {
        // not gameActive and havent started once
        if (gameActive == false && startedOnce <= 0) {
            gameActive = true;
            playRandom = true;

            // create new h1
            $("h1").hide();
            $("h1").before(`<h1 id="level-title">Level ${level}</h1>`);

            if (gameActive == true) {
                // Get a random number from 0-3
                let randomNum = Math.floor(Math.random() * 4);
                gameNumbers.push(randomNum);
                clickButton(randomNum);
            }
        }
    }

    // main button click
    $(".btn").on("click", function (event) {
        startedOnce += 2;
        playRandom = true;

        if (gameActive == true) {
            // click button (to show what button to click)
            if (playRandom == true) {
                clickButton(gameNumbers[gameNumbers.length]);
            }

            setTimeout(function () {
                // add player click
                playerNumbers.push(parseInt(event.currentTarget.textContent));

                // see what button is clicked (check if sequence is correct)
                // console.log(playerNumbers);
                // console.log(gameNumbers);
                // console.log("\nplayerNumbers: " + playerNumbers);
                // console.log("\ngameNumbers: " + gameNumbers + "\n");

                if (arraysEqual(playerNumbers, gameNumbers)) {
                    console.log("same!");
                    playRandom = true;
                    level += 1;
                    updateLevel(level);

                    if (gameActive == true && startedOnce > 1) {
                        // Get a random number from 0-3
                        console.log("Generating Random Num")
                        randomNum = Math.floor(Math.random() * 4);
                        gameNumbers.push(randomNum);
                    }

                    clickButton(gameNumbers[gameNumbers.length]);
                } else {
                    gameActive = false;
                    gameOver();
                }

                // Index from array using the random number and toggle class .pressed (add timeout)
                // $(".btn").eq(randomNum).toggleClass(".pressed");
            }, 100);
        }
    });
});

// play sound when clicked
$("#green").on("click", function () {
    $("#green").toggleClass("pressed");
    greenAudio.play();
    setTimeout(function () {
        $("#green").removeClass("pressed");
    }, 500);
});

$("#red").on("click", function () {
    $("#red").toggleClass("pressed");
    redAudio.play();
    setTimeout(function () {
        $("#red").removeClass("pressed");
    }, 500);
});

$("#yellow").on("click", function () {
    $("#yellow").toggleClass("pressed");
    yellowAudio.play();
    setTimeout(function () {
        $("#yellow").removeClass("pressed");
    }, 500);
});

$("#blue").on("click", function () {
    $("#blue").toggleClass("pressed");
    blueAudio.play();
    setTimeout(function () {
        $("#blue").removeClass("pressed");
    }, 500);
});

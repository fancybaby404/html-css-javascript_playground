// audio
let green = new Audio("./sounds/green.mp3");
let red = new Audio("./sounds/red.mp3");
let yellow = new Audio("./sounds/yellow.mp3");
let blue = new Audio("./sounds/blue.mp3");

let startedOnce = false;
let level = 0;
let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];

function flashEffect(id) {
    setTimeout(function () {
        $(`#${id}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }, 500);
}

function clickEffect(name) {
    $(`#${name}`).toggleClass("pressed");
    setTimeout(function () {
        $(`#${name}`).removeClass("pressed");
    }, 200);
}

function playSound(name) {
    switch (name) {
        case "red":
            red.play();
            break;

        case "blue":
            blue.play();
            break;

        case "green":
            green.play();
            break;

        case "yellow":
            yellow.play();
            break;

        default:
            break;
    }
}

function updateLevel(level) {
    $("h1").html(`<h1 id="level-title">Level ${level}</h1>`);
}

function gameOver() {
    if (startedOnce == true) {
        console.log("Game Over");
        $("h1").html("<h1>Game Over</h1>");
        $("h1").addClass("game-over");
        let gameOverSound = new Audio("./sounds/wrong.mp3");
        gameOverSound.play();
    }
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function nextSequence() {
    setTimeout(function () {
        userClickedPattern = [];
    }, 500);

    // push random chosen color into arary
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // increase level
    level++;
    updateLevel(level);

    // effects
    flashEffect(randomChosenColor);
    playSound(randomChosenColor);
}

$(document).on("keydown", function (event) {
    if (event.key == "Enter" && startedOnce == false) {
        level = 0;
        gamePattern = [];
        userClickedPattern = [];

        updateLevel();
        $("p").text(userClickedPattern);
        $("h1").removeClass("game-over");

        nextSequence();
        startedOnce = true;
    }
});

$(".btn").on("click", function (e) {
    // push id of clicked button into arary(userClickedPattern)
    userChosenColor = e.currentTarget.id;
    userClickedPattern.push(userChosenColor);

    // play audio
    playSound(userChosenColor);

    // click effect
    clickEffect(userChosenColor);

    // check compatibility
    if (
        userClickedPattern[userClickedPattern.length - 1] ==
        gamePattern[userClickedPattern.length - 1]
    ) {
        if (arraysEqual(userClickedPattern, gamePattern) == true) {
            console.log("success");
            nextSequence();
        }
    } else {
        gameOver();
        console.log("fail");

        startedOnce = false;
    }

    $("p").text(userClickedPattern);
});

function Drum() {
    this.makeSound = function makeSound(key) {
        switch (key) {
            case "a":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.currentTime = 0;
                tom1.play();
                break;
            case "s":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.currentTime = 0;
                tom2.play();
                break;
            case "d":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.currentTime = 0;
                tom3.play();
                break;
            case "f":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.currentTime = 0;
                tom4.play();
                break;
            case "j":
                let snare = new Audio("sounds/snare.mp3");
                snare.currentTime = 0;
                snare.play();
                break;
            case "k":
                let crash = new Audio("sounds/crash.mp3");
                crash.currentTime = 0;
                crash.play();
                break;
            case "l":
                let kick = new Audio("sounds/kick-bass.mp3");
                kick.currentTime = 0;
                kick.play();
                break;
            default:
                break;
        }
    };
}

let count = 1;
document.addEventListener("keydown", function (e) {
    keyName = e.key;
    count = 1;
    document.querySelector(`.${keyName}`).classList.toggle("pressed");
    console.log(document.querySelector(`.${keyName}`).classList);
    
    setTimeout(function () {
        document.querySelector(`.${keyName}`).classList.remove('pressed')
        //....and whatever else you need to do
    }, 200);
});

document.querySelectorAll(".drum").forEach(function (button) {
    document.addEventListener("keydown", function (event) {
        if (count >= 1) {
            let keyName = event.key;
            let drum = new Drum();
            console.log(keyName);
            drum.makeSound(keyName);
        }
        count -= 1;
    });
});

// function DrumSet() {

//     startDrum(this.makeSound);
// }

// let drumSet = new DrumSet();

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;

    this.clean = function () {
        alert("cleaning in progress.");
    };
}
function constructorFunction(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // create a method
    this.displayInfo = function () {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.age);
    };
}

let test = new constructorFunction("joe", "mama", 18);

class constructorClass {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        // create a method
        this.displayInfo = function () {
            console.log(this.firstName);
            console.log(this.lastName);
            console.log(this.age);
        };
    }
}

let lmao = new constructorFunction("joe", "mama", 18);
let grabbax = new constructorClass("joe", "mama", 18);

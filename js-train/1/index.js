// ============= Slice message when above 250 
var maxCharacters = 250;
var message = prompt("Propose your tweet").slice(0, maxCharacters)

charactersLeft = maxCharacters - message.length
console.log("\nYou have written " + message.length + " characters, you have " + charactersLeft + " characters left.");

// ============ create a prompt to ask a user for their name, and make their first letter of the name capitalized and none of the rest of the characters 

var yourName = prompt("What is your name?");
var nameFirstLetter = yourName.slice(0,1).toUpperCase();

console.log("Hello, " + nameFirstLetter + yourName.slice(1, yourName.length).toLowerCase());

// ============= Calculate dog years to human years 
var dogAge = 1;
var humanAge = (dogAge - 2) * 4 + 21;
console.log(humanAge)


// ============= Buy Milk (function)
function buyMilk(money) {
    var amount = Math.round(money/1.5);
    alert("bought " + amount + " bottles of milk.");
    return money % 1.5;
}

buyMilk(4);

// ============= Life in weeks (function)
var days = 50
var weeks = 2
var months = 1

function lifeInWeeks(age) {
    var agesLeft = 90 - age;
    var days = (agesLeft * 365)
    var weeks = (agesLeft * 52)
    var months = (agesLeft * 12)
    console.log("You have " + days + " days, " + weeks + " weeks and, " + months + " months left.")  
}

lifeInWeeks(17)

// ============= BMI Calculator
function BMICalculator (weight, height) {
    return Math.floor(weight/(height ** 2))
}

BMICalculator(65, 1.8);

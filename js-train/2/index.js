// ========= Generate Random Number
var n = Math.random();
n = n * 10;
n = Math.floor(n);
// console.log(n);

// ========= Love Calculator
function loveCalculator(firstPerson, secondPerson) {
    var random = Math.random();
    random = Math.floor(random * 100) + 1;
    console.log(random + "% match!");
    console.log(firstPerson + " <3 " + secondPerson);
}
// loveCalculator('joe', 'mama')

// ========= triple equals and double equals
// var a = 1;
// var b = "1";
// if (a === b) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// ========= BMI Calc (advanced)
function BMICalculator(weight, height) {
    var bmi = Math.floor(weight / height ** 2);
    if (bmi < 18.5) {
        return console.log(`Your BMI is ${bmi}, so you are underweight`);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return console.log(`Your BMI is ${bmi}, so you have a normal weight`);
    } else {
        return console.log(`Your BMI is ${bmi}, so you are overweight`);
    }
}

// BMICalculator(92, 1.8);

// ========= Leap Year
function isLeapYear(year) {
    if (year % 4 === 0) {
        return console.log(`${year} is a leap year`);
    } else if (year % 100 === 0) {
        if (year % 400 === 0) {
            return console.log(`${year} is a leap year`);
        }
        return console.log(`${year} is not a leap year`);
    }
    return console.log(`${year} is not a leap year`);
}

// isLeapYear(2020);

// ========= GuessList
guessList = ["joe", "mama", "krabbypatty", "karton", "jack", "johnny", "bob"];
function isInGuessList(guessList, nameOfGuess) {
    if (guessList.includes(nameOfGuess)) {
        return true;
    } else {
        return false;
    }
}

console.log(isInGuessList(guessList, "joe"));

// ========= FizzBuzz
var output = [];
var count = 1;
function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz")
    } 
    else if (count % 3 === 0) {
        output.push("Fizz")
    }
    else if (count % 5 === 0) {
        output.push("Buzz")
    }
    else {
        output.push(count);
    }

    count++
    console.log(output)

}

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
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

// console.log(isInGuessList(guessList, "joe"));

// ========= FizzBuzz
var output = [];
function fizzBuzz() {
    for (let count = 1; count <= 100; count++)
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
    console.log(output);
    }
fizzBuzz();
// ========= Who's buying lunch (needs to be ran in a browser)

names = []
function askNames(){
    names.push(prompt("Please input a name."));
    more = prompt("Is there more? yes/no");
    if (more === 'yes'){more = 1;} else {more = 0;}

    while (more === 1) {
        names.push(prompt("Please input another name: "));
        more = prompt("Is there more? y/n");
        if (more === 'yes' || more === 'y'){more = 1;} else {more = 0;}
    }
}

function whosPaying(names) {
    console.log(names[Math.random])
}
// askNames();
// whosPaying();

// ========= Lyrics of the song 99 Bottles of Beer
function beerSong() {
    var bottlesOfBeer = 99;
    while (bottlesOfBeer >= 0) {
        if (bottlesOfBeer > 1){
            console.log(`${bottlesOfBeer} bottles of beer on the wall, ${bottlesOfBeer} bottles of beer.`);
            bottlesOfBeer--;
            console.log(`Take one down and pass it around, ${bottlesOfBeer} bottles of beer on the wall`);
        }else if (bottlesOfBeer === 1) {
            console.log(`${bottlesOfBeer} bottles of beer on the wall, ${bottlesOfBeer} bottles of beer.`);
            bottlesOfBeer--;
            console.log(`Take one down and pass it around, no more bottles of beer on the wall`);
        } else if (bottlesOfBeer === 0) {
            console.log(`No more bottle of beer on the wall, no more bottle of beer.`);
            bottlesOfBeer--;
            console.log(`Go to the store buy some more, 99 bottles of beer on the wall`);
        }
    }

}
// beerSong();

// ========= Fibonacci Generator
function fibonacciGenerator(n) {
    output = []
    for (let i = 0; i < n; i++) {
        if (typeof output[i-2] == 'undefined') {
            output.push(i);
        } else {
            console.log('not undefined')
            output.push(output[i-2] + output[i-1]);
        }
    }
    return output
}
console.log(fibonacciGenerator(20));

// ========= Sum up all of the numbers in the list

// add numbers into a list
let list = []
for (i = 0; i < 100; i++) {
    list.push(i)
}
console.log(list)

// sum up all numbers in the list into a variable (normal forloop)
let sum = 0
for (i=0; i<list.length; i++){ sum += list[i] }
console.log(sum)

// sum up all numbers in the list into a variable (forEach)
sum = 0
list.forEach(function sumUp(item, index){
    sum += item
})
console.log(sum)

// sum up all numbers in the list into a variable (forEach-variation2)
sum = 0
list.forEach(item => {
    sum += item
});
console.log(sum)
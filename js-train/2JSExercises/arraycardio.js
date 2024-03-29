// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
const inventors = [
    {
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    }, {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    }, {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    }, {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    }, {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    }, {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    }, {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    }, {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    }, {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    }, {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    }, {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    }, {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let born1500s = inventors.filter((element) => element.year > 1500 && element.year < 1600)
// console.log(born1500s)

let died1900s = inventors.filter((element) => element.passed > 1900 && element.passed < 2000)
// console.log(died1900s)

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
let inventorsFirstName = inventors.map(element => element.first)
let inventorsLastName = inventors.map(element => element.last)
// console.log({inventorsFirstName, inventorsLastName})

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let oldestToYoungest = inventors.map(element => { return element.year }).sort((a, b) => b - a)
// console.log(oldestToYoungest)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
let yearsOfLife = inventors.map(element => element.year).reduce((total, item) => total + item)
// console.log(yearsOfLife)

// 5. Sort the inventors by years lived
let sortedYears = inventors.map(element => element.year).sort((a, b) => a - b)
// console.log(sortedYears)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
let deInName = people.filter(element => element.includes('de'))
// console.log(deInName)

// 7. sort Exercise
// Sort the people alphabetically by last name
const test = people.map(element => {
    let splitted = element.split(', ')
    return splitted.reverse()
})
// console.log(test.sort())

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
let cars = data.filter((element) => element.includes('car'))
let truck = data.filter((element) => element.includes('truck'))
let bike = data.filter((element) => element.includes('bike'))
let walk = data.filter((element) => element.includes('walk'))

let totalInstances = {
    cars: cars.length,
    truck: truck.length,
    bike: bike.length,
    walk: walk.length,
}

console.log(totalInstances)

var summedUp = data.reduce((obj, item) => {
    if (!obj.hasOwnProperty(item)) {
        obj[item] = 1;
    }
    else {
        obj[item] += 1;
    }
    return obj;
}, {})
// console.log(summedUp)

function disemvowel(str) {
    let disemvoweled = []
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    str = String(str)
    for (letter of str) {
        for (vowel of vowels) {
            if (vowel == letter) {
                letter = ''
            }
        }
        disemvoweled.push(letter)
    }
    return disemvoweled.join('')
}

console.log(disemvowel('deeznuts'))

function regex(str) {
    return str.match(/[aeiou]/g, '')
}

console.log(regex('deeznuts'))

function getChar(c) {
    return String.fromCharCode(c)
};
console.log(getChar(7))

let numbers = [15, 28, 4, 2, 43]
function sumTwoSmallestNumbers(numbers) {
    let sortedNum = numbers.sort((a, b) => a - b)
    return sortedNum[0] + sortedNum[1]
}

console.log(sumTwoSmallestNumbers(numbers))

function toCamelCase(str) {
    console.log("Original STR: " + str)

    camelCased = []

    let seperator = ''
    if (str.includes('_')) {
        seperator = '_'
    } else {
        seperator = '-'
    }

    str = str.split(seperator)

    if (seperator == '_') {
        // FOR '_', make all words upperCase except for the first one
        str.forEach((word, index) => {
            if (index >= 1) {
                camelCased.push(word.charAt(0).toUpperCase() + word.slice(1))
            } else {
                camelCased.push(word)
            }
        })
    } else {
        // FOR '-', make all words upperCase
        str.forEach((word, index) => {
            if (index >= 1) {
                camelCased.push(word.charAt(0).toUpperCase() + word.slice(1))
            } else {
                camelCased.push(word)
            }
        })
    }
    return camelCased.join('')
}

function toCamelCase(str) {
    let camelCased = []
    let seperator = str.match(/[-_]/)
    if (seperator == null) { seperator = '' }

    str = str.split(seperator)
    str.forEach((word, index) => {
        (index >= 1) ? camelCased.push(word.charAt(0).toUpperCase() + word.slice(1)) : camelCased.push(word)
    })

    return camelCased.join('')
}
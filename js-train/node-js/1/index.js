const fs = require('fs');
const superheroes = require('superheroes');
const supervillains = require('supervillains');
const supervillans = require('supervillains')

let mySuperHero = superheroes.random();
let mySuperVillan = supervillains.random();
console.log(mySuperHero)
console.log(mySuperVillan)


fs.copyFileSync('./file1.txt', "./file2.txt")
fs.unlinkSync('./file2.txt')
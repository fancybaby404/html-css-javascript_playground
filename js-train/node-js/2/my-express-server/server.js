const express = require('express');

const app = express();

app.get('/', function(req, res) {
    console.log(req)
    res.send('<h1>Joe Mama</h1>')
})

app.get('/contact', function(req, res) {
    res.send('<h1>Contact Me: julianbuck.com</h1>')
})

app.get('/hobbies', function(req, res) {
    res.send("Hello")
})

app.get('/about', function(req, res) {
    res.send('<p>The owner of this website is julian macato</p>')
})

app.listen(3000, function () {
    console.log('Server started on port 3000')
});
const express = require('express');
const app = express();
app.use(express.urlencoded()); 


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res) {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = parseInt(num1) + parseInt(num2);
    console.log(result)
})

app.listen(3000, function () {
    console.log('Server running on localhost 3000')
})
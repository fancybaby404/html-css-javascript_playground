
const express = require("express");
const app = express();
app.use(express.urlencoded());

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html')
// })

// app.post('/', function(req, res) {
//     let num1 = req.body.num1;
//     let num2 = req.body.num2;
//     let result = parseInt(num1) + parseInt(num2);
//     console.log(result)
// })

app.post("/bmicalculator", function (req, res) {
    let weight = req.body.weight;
    let height = req.body.height;

    let result = (parseInt(weight) / parseInt(height ** 2));
    console.log(result);

    res.send(`Your BMI is ${result}`)
});

app.listen("3000", function () {
    console.log("Listening on port 3000");
});

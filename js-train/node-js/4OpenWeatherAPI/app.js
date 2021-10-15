const express = require('express');
const https = require('https');
const app = express();
const PORT = 3000
app.use(express.urlencoded({ extended: true }))

const apiKey = ''

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    let query = req.body.cityName
    console.log(query)
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${query}`

    https.get(url, (response) => {

        console.log(response.statusCode);
        if (response.statusCode === 200) {
            response.on('data', (data) => {
                // Get Data
                const weatherData = JSON.parse(data)
                const weatherLocation = weatherData.name
                const weatherTemperature = weatherData.main.temp
                const weatherDescription = weatherData.weather[0].description
                const weatherIcon = weatherData.weather[0].icon


                res.write(`<h1>The current weather for ${weatherLocation} is ${weatherTemperature}. </h1>`);
                res.write(`<h1>The weather there is currently having a ${weatherDescription}</h1>`);
                res.write(`<img src="https://openweathermap.org/img/w/${weatherIcon}.png"></img>`);
                res.send()
            })
        } else {
            res.send(`Error : ${response.statusCode}`)
        }



    })

})


app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
})
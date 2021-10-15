const express = require('express')
const https = require('https')
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})

app.post('/', (req, res) => {
    const firstName = (req.body.firstName)
    const lastName = (req.body.lastName)
    const emailAddress = (req.body.emailAddress)
    console.log({ firstName, lastName, emailAddress })

    const url = ''

    https.get(url, (res) => {
        res.on('data', (data) => {

        })
    })

})

app.listen(PORT, (req, res) => {
    console.log(`listening to port ${PORT}`)
})

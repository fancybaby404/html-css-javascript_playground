const express = require('express')
const https = require('https')
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))


PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})

app.post('/', (req, res) => {
    // SUBSCRIBER INFO
    const getInfo = () => {
        const firstName = (req.body.firstName)
        const lastName = (req.body.lastName)
        const emailAddress = (req.body.emailAddress)
        const data = {
            members: [
                {
                    email_address: emailAddress,
                    status: 'subscribed',
                    merge_fields: {
                        FNAME: firstName,
                        LNAME: lastName,
                    }
                }
            ]
        }

        console.log({ firstName, lastName, emailAddress })
        return JSON.stringify(data)
    }

    const jsonData = getInfo()

    // API IDS/KEYS
    const apiKey = ''
    const listId = ''

    // URL
    let url = `https://us5.api.mailchimp.com/3.0/lists/${listId}`

    // OPTIONS
    const options = {
        method: 'POST',
        auth: `julianmacato:${apiKey}`
    }

    // POST REQUEST
    const request = https.request(url, options, (postRes) => {
        postRes.on('data', (data) => {
            console.log('\n==========\ndata recieved\n')
            // console.log(JSON.parse(data))
        })

        if (postRes.statusCode == 200) {
            res.sendFile(__dirname + "/success.html")
        } else {
            res.sendFile(__dirname + "/failure.html")
        }
    })

    request.write(jsonData)
    request.end()

})

app.post('/failure', (req, res) => {
    res.redirect('/')
})

app.listen(PORT || 3000, (req, res) => {
    console.log(`listening to port ${PORT}`)
})

var path = require('path')
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?'
dotenv.config()
const apiKey = process.env.API_KEY

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)
console.log(apiKey)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

//RECIEVE URL FROM CLIENT
app.post('/source', async function(req, res){
    let source = req.body.url
    console.log(source)
    const apiUrl = `${baseUrl}key=${apiKey}&url=${source}&lang=en`
    console.log(apiUrl)
    const preEval = await fetch(apiUrl)
    const evalResult = await preEval.json()
    console.log(evalResult)
    res.send(evalResult)
})



// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

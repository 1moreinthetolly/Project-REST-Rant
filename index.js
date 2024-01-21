require('dotenv').config()

const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', function (req, res) {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.get('/', (req, res) => {
    let places = []
    res.render('places/index')
})

app.listen(process.env.PORT)
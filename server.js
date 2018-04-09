var express = require('express')
var app = express()
var port = process.env.PORT || 8080

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.listen(port)

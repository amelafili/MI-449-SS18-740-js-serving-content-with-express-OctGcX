var express = require('express')
var app = express()
var port = process.env.PORT || 8080

var article = {
  title: 'Squirrel escapes squirrel prison, now at large!',
  content: 'Yesterday evening at 7:47PM, the criminal squirrel Rabid Rabindra got out of his cage.'
}

app.get('/', function (request, response) {
  response.render('pages/index', {
    article: article
  })
})

app.set('view engine', 'ejs')

app.listen(port)

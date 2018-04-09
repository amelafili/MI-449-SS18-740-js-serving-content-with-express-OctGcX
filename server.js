var express = require('express')
var app = express()
var port = process.env.PORT || 8080

var article = {
  title: 'Why Turtles are the Best Animals Ever',
  content: 'This page is dedicated to informing you all to my non-biased opinion on why' +
  'turtles are the most superior animal'
}
app.get('/', function (request, response) {
  response.render('pages/index', {
    articles: article
  })
})

app.set('view engine', 'ejs')

app.listen(port)

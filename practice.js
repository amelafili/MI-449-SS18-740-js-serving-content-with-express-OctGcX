var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var articles = {}
app.set('view engine', 'ejs')

function createArticle (article) {
  var id = Object.keys(articles).length
  article.createdAt = new Date()
  articles[id] = article
}

CreateArticle ({
  title: 'Sea Turtle',
  image: '/image/sea-turtle.jpg',

})

app.get('/', function (request, response) {
  response.render('pages/index', {
    article: article
  })
})
// calls port
app.listen(port)

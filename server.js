var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var articles = {}

app.set('view engine', 'ejs')

app.use(express.static('public'))

function createArticle (article) {
  var id = Object.keys(articles).length
  article.createdAt = new Date()
  articles[id] = article
}

CreateArticle({
  title: 'Why Turtles are Amazing',
  url: '/reason/',
  content: 'Turtles are reptiles that have the ability to travel on land and water.',
  image: '/images/turtle-facts.jpg'
})

CreateArticle({
  title: 'Information about Turtles',
  url: '/info/',
  image: '/images/turtle-info.png',
  link: 'for more information on turtles, visit' +
  'https://www.livescience.com/52361-turtle-facts.html'
})

CreateArticle({
  title: 'Different Kinds',
  url: '/kinds/',
  image: '/images/turtle-kinds.jpg',
  link: 'https://www.allturtles.com/turtle-species/'
})

app.get('/', function (request, response) {
  response.render('/pages/index', {
    articles: articles
  })
})

app.get('/reason', function (request, response) {
  response.render('/pages/reason', {
    articles: articles
  })
})

app.get('/info', function (request, response) {
  response.render('/pages/info', {
    articles: articles
  })
})

app.get('/kinds', function (request, response) {
  response.render('/pages/kinds', {
    articles: articles
  })
})

app.listen(port)

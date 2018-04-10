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

createArticle({
  title: 'Sea Turtle',
  url: '/sea-turtle',
  image: '/images/sea-turtle.jpg/',
  color: 'Ranges from green to greenish-brown to black.',
  length: '5 feet',
  habitat: 'Oceans and beaches.',
  link: 'http://www.seaturtle.org/'
})
createArticle({
  title: 'Painted Turtle',
  url: '/painted-turtle',
  image: '/images/painted-turtle.jpg/',
  color: 'Green to black shell with red and grey.',
  length: '4-10 inches',
  habitat: 'Freshwater areas such as lakes and ponds.',
  link: 'http://thepaintedturtle.org/'
})
createArticle({
  title: 'Common Box Turtle',
  url: '/box-turtle',
  image: '/images/box-turtle.jpg',
  color: 'Dark colors such as dark brown with vibrant spots, such as yellow.',
  length: '4.5 inches',
  habitat: 'Open forests and wet fields.',
  link: 'http://www.boxturtles.com/'
})

app.get('/', function (request, response) {
  response.render('pages/index', {
    articles: articles,
    article: articles
  })
})

app.get('/sea-turtle', function (request, response) {
  response.render('pages/turtle', {
    articles: articles
  })
})

app.get('/painted-turtle', function (request, response) {
  response.render('pages/turtle', {
    articles: articles
  })
})

app.get('/box-turtle', function (request, response) {
  response.render('pages/turtle', {
    articles: articles
  })
})

app.listen(port)

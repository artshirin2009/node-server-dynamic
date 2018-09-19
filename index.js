const path = require('path')
const express = require('express');
const app = express();
const port = 3000;

const exphbs = require('express-handlebars')

app.engine('.hbs', exphbs({
    defaultLayout: 'default',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'app/views/layouts')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'app/views/templates'))

app.get('/', (request, response) => {
    response.render('home', {
        user: "Arthur"
    })
})

app.get('/news', (request, response) => {
    let news = require('./db.json').news;

    if (request.query.sort.toUpperCase() === 'DESC') {
        news = news.sort((a, b) => b.id > a.id)
    }
    response.render('news/list', {
        news: require('./db.json').news
    })
})
app.get('/news/:id', (request, response) => {
    const id = parseInt(request.params.id);
    response.render('news/item', {
        news: require('./db.json').news.filter(item => item.id === id)[0]
    })
    console.log(require('./db.json').news.filter(item => item.id === id))
})

app.listen(port, (err) => {
    if (err) {
        return console.log(err.message)
    }
    console.log(`Server is running on port ${port}`)
})
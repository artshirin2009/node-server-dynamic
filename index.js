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
        user: "Arthur",
        users: [{
                name: 'John Doe',
                age: 30
            },
            {
                name: 'Jane Doy',
                age: 32
            }
        ],
        helpers: {
            list: require('./app/helpers/news-item')
        }
    })
})

app.listen(port, (err) => {
    if (err) {
        return console.log(err.message)
    }
    console.log(`Server is running on port ${port}`)
})
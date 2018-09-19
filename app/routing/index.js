app.get('/', (request, response) => {
    response.render('home', {
        user: "Arthur"
    })
})
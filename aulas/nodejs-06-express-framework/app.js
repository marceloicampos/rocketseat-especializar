// npm install express --save
// npm i nodemon -g
// execute nodemon app.js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World with Express!')
})

app.get('/about', (req, res) => {
    res.send('About Me')
})

app.get('/hello/:name/:work', (req, res) => {
    res.send(`<p>hello ${req.params.name} ${req.params.work}</p>`)
})
// localhost:3000/hello/marcelo/developer

app.get('/hi/:name/:work', (req, res) => {
    res.send('<strong>' + 'hi ' + req.params.name + ' ' + req.params.work + '</strong>')
})
// localhost:3000/hi/marcelo/developer

app.get('/page', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
})
// localhost:3000/page

app.listen(3000, () => console.log('servidor rodando na 3000'))

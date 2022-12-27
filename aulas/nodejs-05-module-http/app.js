var http = require('http')

http.createServer((req, res) => {
    res.end('Hello World with HTTP !\n')
}).listen(3000)

console.log('Server running at http://localhost:3000/')

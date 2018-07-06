const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const resources = { "/IP": "Internet Protocol", "/TCP": "Transmission Control Protocol" }

const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.headers)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

const http = require('http')
const url = require('url')
const router = require('../router')
const { 2: port } = process.argv

const handleRequest = async (request, response) => {
    console.log('[info]', request.url)
    const parsedUrl = url.parse(request.url, true)

    try {
        const res = await router(parsedUrl.pathname)
        response.write(res)
    } catch (err) {
        response.writeHead(404, 'Not Found')
        response.write('404, Not Found')
    }

    response.end()
}

http.createServer(handleRequest).listen(port || 3000);
console.log('[info]', 'Server started at', `http://localhost:${port}`)
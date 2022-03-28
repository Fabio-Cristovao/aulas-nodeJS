const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs/promises')
const { 2: port } = process.argv

const handleRequest = async (request, response) => {

    console.log('[info]', request.url)

    const parsedUrl = url.parse(request.url, true)

    // switch (parsedUrl.pathname) {
    //     case '/': response.write('My index page')
    //         break
    //     case '/about': response.write('My about page')
    //         break
    //     case '/contacts': response.write('My contacts page')
    //         break
    //     default:
    //         response.write('404 Not found')
    //         response.write('404', 'Not Found')
    // }
    // request.push(request.url)
    // response.write(requests.join(', '))

    try {
        const file = parsedUrl.pathname === '/'
            ? 'index.html'
            : parsedUrl.pathname.substring(1).concat('.html');
        const filePath = path.join(__dirname, '..', 'templates', file)
        const content = await fs.readFile(filePath)
        response.write(content)

        console.log('OS MEUS TESTES', parsedUrl.pathname.substring(1))
        console.log(content.toString())
        console.log(filePath)
        console.log(__dirname)
        console.log(file)

    } catch (err) {
        response.writeHead(404, 'Not Found')
        response.write('404, Not Found')
    }

    response.end()
}

http.createServer(handleRequest).listen(port || 3000);
console.log('[info]', 'Server started at', `http://localhost:${port}`)
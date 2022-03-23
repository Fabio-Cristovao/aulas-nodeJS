const http = require('http');
const url = require('url');
const { 2: port } = process.argv;

const handleRequest = async (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  switch (parsedUrl.pathname) {
    case '/': response.write('My index page:'); break;
    case 'about': response.write('My about page:'); break;
    case 'contacts': response.write('My contacts page:');break;
    default: 
      response.writeHead(404, 'Not found');
      response.write(404, 'Not found');
  }
  /* console.log('[info]', request.url);
  response.write(request.join('. ')); */
  response.end();
};

// bit.ly/mg-nodejs-2022

http.createServer(handleRequest).listen(port || 3000);
console.log('[info]', 'Server started at', `http://localhost:${port}`);


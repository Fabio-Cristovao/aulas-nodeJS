const {createServer} = require('http');
const router = require('./router');


module.exports = createServer(async (request, response) => {
  try {

    const content = await router(request, response);
    return response.end(content);

  } catch (error) {
    response.writeHead(404, {
      'content-Type' : 'text/html'
    });

    return response.end(`<h1>${error.message}<h1/>`);
    
  }

});
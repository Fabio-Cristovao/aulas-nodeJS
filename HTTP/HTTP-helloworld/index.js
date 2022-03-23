const http = require('http');
const {2: port } = process.argv;

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.write('Hello world ');
  response.write('another line of code ');
  response.end('ok');
  
});

server.listen(port || 3000); 


//TCP IP

//TCP forma de transmitir os dados para

// 5 gamas 200 correu 300 redirect 400 error de pedido 500 erros de infraestrutura

// 200 success 201 algo foi criado 404 not found 301 permanent redirect 400 bad request 401 unauthorized  402 permanent unauthorized 403 forbidden 405 method not allowed 418 i am a teapot 500 internal server error


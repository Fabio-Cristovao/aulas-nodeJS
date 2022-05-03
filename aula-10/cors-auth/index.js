const http = require("http");
const app = require("./app");
require('dotenv');
const server = http.createServer(app);

const { API_PORT } = process.env;
const port =/*  process.env.PORT || API_PORT; */ 3004

// server listening 
server.listen(port, () => {
   console.log(`Server running on port ${port}`);
});


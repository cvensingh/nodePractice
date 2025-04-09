import http from 'http';
import { request } from 'https';

const PORT = 3000;
const server = http.createServer((req, res) => {
   // console.log("Shivendra Singh");
   res.setHeader('Content-Type', 'text/plain');
   res.statusCode = 200;
   res.end('Hello Shiva');
});

server.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
})
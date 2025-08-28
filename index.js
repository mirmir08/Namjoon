const http = require('http');

const app = http.createServer((request,response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end('Servidor node iniciado correctamente como debe de ser')
})

const PORT = 3000
app.listen(PORT)
console.log('Servidor levantao/iniciao en el puerto 3000')


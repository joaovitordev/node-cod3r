const moduloA = require('../../moduloA')
console.log(moduloA.ateLogo)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
const { log } = require('console')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)
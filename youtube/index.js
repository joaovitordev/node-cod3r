const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Rota principal')
})

app.get('/sobre', (req, res) => {
    res.send('pagina de sobre')
})

app.get('/blog', (req, res) => {
    res.send('pagina de blog')
})

app.listen(8081, () => {
    console.log('Servidor rodando')
})
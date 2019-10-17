const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./routes')
const app = express()


mongoose.connect('mongodb+srv://oministack:oministack@omnistack-7ks3y.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors()) // Estudar CORS, ele permite que se controle quem tem acesso a API
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))// Forma q o Express utiliza para retornar arquivos staticos(img,pdfs...)
app.use(routes)

app.listen(3333)
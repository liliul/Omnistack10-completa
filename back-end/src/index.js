// Inicio da Aplicacao
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//const http = require('http')

const routes = require('./routes')
//const { setupWebsocket } = require('./websocket')

const app = express()
//const server = http.Server(app)

//setupWebsocket(server)

const mongoConnection = 'mongodb://root:admin@172.17.0.2:27017/?authSource=admin'
mongoose.connect(mongoConnection , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => console.log('✅ Conectado ao MongoDB'))
.catch(err => console.error('❌ Erro ao conectar ao MongoDB:', err));

// mongoose.connect('mongodb+srv://omnistack10:<senha>@cluster0-00lsr.mongodb.net/week10?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// })

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log('Porta 3333')
})
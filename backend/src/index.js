const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://semana:semana@cluster0-jnqu6.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// permite enviar info em tempo real a todas a rotas
// acesso ao IO em toda os controllers
app.use((req, res, next) => {
    req.io = io;

    next();
})

// todas as URL de diferentes IPs e servidores podem acessar o backend
app.use(cors());

// rota para acessar as imagens
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

// rotas da aplicação
app.use(require('./routes'));

server.listen(3333);

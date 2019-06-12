const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0-jnqu6.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.get('/', (req, res) => {
    return res.send(`Hello ${req.query.nome}!`);
});

app.listen(3333);

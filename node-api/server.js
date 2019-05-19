const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();


//iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);
requireDir('./src/models');

const Product = mongoose.model('Product');

//primeira rota
app.get('/', (req,res)=>{
    Product.create({
        title:'React Native',
        description:'Build apps with react native',
        url:'www.google.com.br'
    })

    return res.send('hello caina, tudo bem?');
});

app.listen(3001);
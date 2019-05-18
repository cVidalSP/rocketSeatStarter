const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('hello caina, tudo bem?');
});

app.listen(3001);
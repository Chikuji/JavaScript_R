 const express = require('express');

 const app = express();

 app.use(express.json());

 app.post('/ola',(req, res) => {
    console.log(req.body.ola);
    res.send({resposta:"Recebido"});
    res.end();

});

 app.listen(3000);

 console.log("Porta 3000 ok")